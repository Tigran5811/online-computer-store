import fs from 'fs';

export const readFile = async (filePath) => new Promise((res, rej) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return rej(err);
        }

        return res(JSON.parse(data));
    });
});

export const writeFile = async (filePath, content) => new Promise((res, rej) => {
    fs.writeFile(filePath, JSON.stringify(content), (err) => {
        if (err) {
            return rej(err);
        }
        return res();
    });
});

export const isExists = (filePath) => fs.existsSync(filePath);
