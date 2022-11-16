import express from 'express';

import morgan from 'morgan';
import mongoose from 'mongoose';
import userRouter from './user/router.js';
import laptopRouter from './laptop/router.js';
import orderRouter from './order/router.js';
import imageRouter from './image/router.js';

await mongoose.connect('mongodb+srv://root:root@userdata.65xgdjm.mongodb.net/?retryWrites=true&w=majority');

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use('/user', userRouter);
app.use('/laptop', laptopRouter);
app.use('/order', orderRouter);
app.use('/single', imageRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const errorResponse = {
        location: err.location,
        error: [{ msg: err.message }],
    };
    res.status(err.statusCode).send(errorResponse);
});

export default app;
