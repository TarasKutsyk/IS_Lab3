const fs = require('fs');
const path = require('path');

const substitutionTablePath = path.join(process.cwd(), 'data', 'substitution_table.json');
const inputDataPath = path.join(process.cwd(), 'data', 'encrypted.txt');
const outputFilePath = path.join(process.cwd(), 'data', 'decrypted.txt');

module.exports = {
    getSubstitutionTable() {
        const substitutionTable_raw = fs.readFileSync(substitutionTablePath);
        return JSON.parse(substitutionTable_raw);
    },

    getInputText() {
        const rawData = fs.readFileSync(inputDataPath);
        return rawData.toString();
    },

    getDecryptedData() {
        const rawData = fs.readFileSync(outputFilePath);
        return rawData.toString();
    },

    writeDecryptedData(data) {
        fs.writeFileSync(outputFilePath, data);
    }
}