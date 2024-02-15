import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserModel } from './User.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/air-status")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
