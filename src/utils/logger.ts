import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";

// ensure log directory exists
const logDir = path.join(__dirname, "..", "..", "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

export const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(logDir, "test.log") })
    ],
});
