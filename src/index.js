import mongoose from 'mongoose';
import fs from 'fs';

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_URL } = process.env;

export const dbConfig = async () => {
    await mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}`);
};

export const checkFolder = () => {
    const dir = './src/uploads/images';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

export const init = async () => {
    checkFolder();
    await dbConfig();
};
