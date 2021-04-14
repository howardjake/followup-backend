const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    uid: String,
    name: String,
    email: String,
    website: String,
    number: String,
    lastContacted: Date,
}, {timestamps: true})

module.exports = mongoose.model('Contact', contactSchema);
