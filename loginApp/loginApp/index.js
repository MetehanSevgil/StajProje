const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// MongoDB baðlantýsý
mongoose.connect('mongodb://localhost:27017/login-app');


// Kullanýcý þemasý ve modeli
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// HTML dosyasýný sunma
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// CSS dosyasýný sunma
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

// JavaScript dosyasýný sunma
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});

// Kayýt rotasý
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send('User Registered');
});

// Login rotasý
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send('Invalid Credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).send('Invalid Credentials');
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.json({ token });
});

// Sunucu baþlatma
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
