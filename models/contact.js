const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: String,
    email: String,
    website: String,
    number: String,
}, {timestamps: true})

module.exports = mongoose.model('Contact', contactSchema);
