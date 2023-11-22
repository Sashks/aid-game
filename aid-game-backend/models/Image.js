const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: String,
    description: String,
    // Other fields...
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
