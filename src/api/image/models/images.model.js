import mongoose from 'mongoose';

const imagesSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
   
});

export const Images = mongoose.model('Images', imagesSchema);
