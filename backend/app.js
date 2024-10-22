import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import user_data from './schema/user_details.js'
import bcrypt from 'bcrypt'

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect("mongodb://localhost:27017/blog-project")
    .then(() => console.log('MongoDB connection successful'))
    .catch(error => console.log(`MongoDB connection failed due to ${error}`));


// Signup Route
app.post('/Signup', async (req, res) => {
    const { username, email, password } = req.body;

    const e_email = await user_data.findOne({ email });
    const e_username = await user_data.findOne({ username });

    if (e_username) return res.status(400).json({ message: 'Username already exists' });
    if (e_email) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const new_user = new user_data({ username, email, password: hashedPassword });

    try {
        await new_user.save();
        res.json({ message: 'Congratulations! Your account is created' });
    } catch (err) {
        res.json({ message: `User details not saved due to ${err}` });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});