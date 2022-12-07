import mongoose from 'mongoose';
import { CoreSchema } from '../../../core/core-schema.js';

const userSchema = new CoreSchema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    isEmailVerified: {
        type: String,
    },
    userAdditional: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'UserAdditional',
    },
});

export const User = mongoose.model('User', userSchema);
