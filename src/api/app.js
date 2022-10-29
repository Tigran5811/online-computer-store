import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { ServiceError } from '../utils/error-handling.js';
import userRouter from './user/router.js';

await mongoose.connect('mongodb+srv://root:root@userdata.65xgdjm.mongodb.net/?retryWrites=true&w=majority');

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use('/user', userRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const errorResponse = {};

    if (err instanceof ServiceError) {
        errorResponse.location = 'Service';
        errorResponse.error = [{ msg: err.message }];
    }
    res.status(err.statusCode).send(errorResponse);
});

export default app;
