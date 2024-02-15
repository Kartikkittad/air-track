import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    number: String,
});

const UserModel = mongoose.model("json", userSchema);

export { UserModel };
