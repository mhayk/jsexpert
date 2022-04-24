const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);

        await rejects(result, rejection);
    }

    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);

        await rejects(result, rejection);
    }

    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath);
        const expected = [
            {
                "name": "Mhayk Whandson",
                "id": 123,
                "profession": "Javascript Developer",
                "birthDay": 1988
            },
            {
                "name": "John Doe",
                "id": 456,
                "profession": "Javascript Developer",
                "birthDay": 1988
            },
            {
                "name": "Jane Doe",
                "id": 789,
                "profession": "Javascript Developer",
                "birthDay": 2003
            }
        ]



        await deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }

})()