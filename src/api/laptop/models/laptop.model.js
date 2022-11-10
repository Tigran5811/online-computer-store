import mongoose from 'mongoose';

const laptopSchema = new mongoose.Schema({
    Manufacturer: {
        type: String,
        required: true,
    },
    SSD: {
        type: String,
        required: true,
    },
    Resolution: {
        type: String,
        required: true,
    },
    Diagonal: {
        type: Number,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
});

export const Laptop = mongoose.model('Laptops', laptopSchema);
