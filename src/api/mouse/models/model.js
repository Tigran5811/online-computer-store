import mongoose from 'mongoose';
import { CoreSchema } from '../../../core/core-schema.js';

const mouseSchema = new CoreSchema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    isWireless: {
        type: Boolean,
        required: true,
    },
    color: {
        type: String,
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

export const Mouse = mongoose.model('Mouse', mouseSchema);
