import mongoose from 'mongoose';

const userAdditionalSchema = new mongoose.Schema({
    school: {
        type: String,
    },
});

export const UserAdditional = mongoose.model('UserAdditional', userAdditionalSchema);
