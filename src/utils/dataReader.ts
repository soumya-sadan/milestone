import fs from "fs";
import path from "path";
import csv from "csv-parser";

export class DataReader {

    static readJSON(fileName: string) {
        const filePath = path.join(__dirname, "..", "test-data", fileName);
        const rawData = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(rawData);
    }

    static readCSV(fileName: string): Promise<any[]> {
        const filePath = path.join(__dirname, "..", "test-data", fileName);
        
        return new Promise((resolve, reject) => {
            const results: any[] = [];
            fs.createReadStream(filePath)
                .pipe(csv())
                .on("data", (data) => results.push(data))
                .on("end", () => resolve(results))
                .on("error", reject);
        });
    }
}
