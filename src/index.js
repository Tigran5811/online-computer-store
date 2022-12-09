import mongoose from 'mongoose';
import fs from 'fs';
import { createService as createUserService } from './api/user/service.js';

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

export const seedDb = async () => {
    try {
        await createUserService({
            username: 'SuperAdmin',
            firstName: 'Admin',
            lastName: 'Admin',
            role: 'SuperAdmin',
            password: 'somPassword',
            email: 'tiko5811@mail.ru',
            age: 1,
            isEmailVerified: true,
        });
    } catch (err) {
        console.log('Super admin exists');
     }
};

export const init = async () => {
    checkFolder();
    await dbConfig();
    await seedDb();
};
