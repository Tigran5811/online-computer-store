import mongoose from 'mongoose';
import { CoreSchema } from '../../../core/core-schema.js';

const imagesSchema = new CoreSchema({
    path: {
        type: String,
        required: true,
    },

});

export const Images = mongoose.model('Images', imagesSchema);
