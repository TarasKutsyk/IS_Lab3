const fileService = require('../utility/fileService');

function getNextCode (dataString, index) {
    let codeStr = '';

    for (let i = index; i < index + 3; i++) {
        if (!dataString[i]) {
            return 0;
        }

        codeStr += dataString[i];
    }

    return +codeStr;
}

function matchLetter (code, substitutionTable) {
    for (const letter in substitutionTable) {
        if (substitutionTable[letter].includes(code)) {
            return letter;
        }
    }
}

function decryptData(data) {
    const substitutionTable = fileService.getSubstitutionTable();

    let result = '';

    let nextCode, currentIndex = 0;
    let matchingLetter;
    while (nextCode = getNextCode(data, currentIndex)) {
        matchingLetter = matchLetter(nextCode, substitutionTable);

        result += matchingLetter;

        currentIndex += 3;
    }

    return result;
}

const dataToDecrypt = fileService.getInputText();

const decryptedData = decryptData(dataToDecrypt);

fileService.writeDecryptedData(decryptedData);