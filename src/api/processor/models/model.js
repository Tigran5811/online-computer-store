import mongoose from 'mongoose';

const processorSchema = new mongoose.Schema({
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
    memorySpeed: {
        type: Number,
        required: true,
    },
    memorySize: {
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

export const Processor = mongoose.model('Processor', processorSchema);
