import express from 'express';
import { ServiceError, ValidationError } from '../utils/error-handling.js';
import userRouter from './user/router.js';

const app = express();

app.use(express.json());

app.use('/user', userRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const errorResponse = {};
    if (err instanceof ValidationError) {
        errorResponse.location = 'Validation';
        errorResponse.error = { massage: err.message };
    }

    if (err instanceof ServiceError) {
        errorResponse.location = 'Service';
        errorResponse.error = { massage: err.message };
    }
    res.status(err.statusCode).send(errorResponse);
});

export default app;
