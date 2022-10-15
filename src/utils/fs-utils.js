import fs from 'fs';

export const exists = (filePath) => fs.existsSync(filePath);

export const readFile = async (filePath) => new Promise((res, rej) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return rej(err);
    }
    return res(JSON.parse(data));
  });
});

export const writeFile = async (filePath, data) => new Promise((res, rej) => {
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      return rej(err);
    }
    return res();
  });
});
