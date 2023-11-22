const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/aid-game-database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));



//API Endpoint for images
const Image = require('./models/Image'); // Import the model

// Get all images
app.get('/api/images', async (req, res) => {
    try {
        const images = await Image.find({});
        res.json(images);
    } catch (error) {
        res.status(500).send("Error fetching images");
    }
});

//API endpoint for feedback
app.post('/api/feedback', async (req, res) => {
    // Logic to save feedback to the database
    // req.body will contain the feedback data
});

