import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    laptop: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Laptop',
    },
});

export const Order = mongoose.model('Order', orderSchema);
