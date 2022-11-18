import mongoose from 'mongoose';

const ramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    totalCores: {
        type: Number,
        required: true,
    },
    totalThreads: {
        type: Number,
        required: true,
    },
    generation: {
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

export const Ram = mongoose.model('Ram', ramSchema);
