import express from 'express';
import morgan from 'morgan';
import userRouter from './user/router.js';
import laptopRouter from './laptop/router.js';
import orderRouter from './order/router.js';
import imageRouter from './image/router.js';
import mouseRouter from './mouse/router.js';
import keyboardRouter from './keyboard/router.js';
import displayRouter from './display/router.js';
import ramRouter from './ram/router.js';
import processorRouter from './processor/router.js';

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use('/user', userRouter);
app.use('/laptop', laptopRouter);
app.use('/order', orderRouter);
app.use('/image', imageRouter);
app.use('/mouse', mouseRouter);
app.use('/keyboard', keyboardRouter);
app.use('/display', displayRouter);
app.use('/ram', ramRouter);
app.use('/processor', processorRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const errorResponse = {
        location: err.location,
        error: [{ msg: err.message }],
    };
    res.status(err.statusCode).send(errorResponse);
});

export default app;
