import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    age: Number,
});

export const User = mongoose.model('Users', userSchema);
