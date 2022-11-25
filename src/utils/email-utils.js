import nodemailer from 'nodemailer';
import { UtilsError } from './error-handling.js';

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;
export const sendEmail = async (email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false, // true for 465, false for other ports
            auth: {
                user: EMAIL_USERNAME, // generated ethereal user
                pass: EMAIL_PASSWORD, // generated ethereal password
            },
        });

        // send mail with defined transport object
         await transporter.sendMail({
            from: '"Mr Stevens Adams" <tigran.bayramyan3@gmail.com>', // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: message, // plain text body
            // html: '<b>Hello world?</b>', // html body
        });
    } catch (err) {
        throw new UtilsError(err.message, 410);
    }
};
