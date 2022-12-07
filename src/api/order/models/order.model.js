import mongoose from 'mongoose';
import { CoreSchema } from '../../../core/core-schema.js';

const orderSchema = new CoreSchema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    laptop: {
        type: mongoose.Types.ObjectId,
        ref: 'Laptop',
    },
    display: {
        type: mongoose.Types.ObjectId,
        ref: 'Display',
    },
    keyboard: {
        type: mongoose.Types.ObjectId,
        ref: 'Keyboard',
    },
    mouse: {
        type: mongoose.Types.ObjectId,
        ref: 'Mouse',
    },
    processor: {
        type: mongoose.Types.ObjectId,
        ref: 'Processor',
    },
    ram: {
        type: mongoose.Types.ObjectId,
        ref: 'Ram',
    },
});

export const Order = mongoose.model('Order', orderSchema);
