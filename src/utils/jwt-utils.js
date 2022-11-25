import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const getToken = (signData, expiresIn) => {
    const token = jwt.sign(signData, JWT_SECRET, { expiresIn });
    return token;
};

export const decodeToken = (token) => {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
 };
