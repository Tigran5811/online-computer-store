import mongoose from 'mongoose';
import { CoreSchema } from '../../../core/core-schema.js';

const displaySchema = new CoreSchema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    inch: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Images',
    },
});

export const Display = mongoose.model('Display', displaySchema);
