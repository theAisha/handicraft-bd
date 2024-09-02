const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3019;

const app = express();
app.use(express.static(__dirname));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/handicrafts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connection successful');
});

// Define the schema and model for the 'userSignUp' collection
const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  registerEmail: { type: String, unique: true },
  registerPassword: String,
});

const Users = mongoose.model('userSignUp', userSchema);

// Registration route
app.post('/register', async (req, res) => {
  const { userName, registerEmail, registerPassword } = req.body;
  try {
    const oldUser = await Users.findOne({ userName });
    if (oldUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new Users({
      userName,
      registerEmail,
      registerPassword,
    });
    await newUser.save();
    res.status(201).send({ status: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send({ status: 'Registration unsuccessful', error: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
    const { userName, registerPassword } = req.body;
    try {
        const user = await Users.findOne({ userName });
        if (!user) {
            return res.json({ error: "User not found" });
        }

        if (user.registerPassword !== registerPassword) {
            return res.json({ error: "Invalid password" });
        }

        res.send({ 
            status: "Login Successful", 
            user: {userName: user.userName} 
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.send({ status: "Login Unsuccessful" });
    }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
