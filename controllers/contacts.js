const Contact = require('../models/contact');


const index = async (req, res) => {
    try {
        const contact = await Contact.find({});
        res.json(contact);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "sorry something went wrong there"});
    }
}

async function create(req, res) {
    try {
        const contact = await Contact.create(req.body);
        req.qeury.uid = contact.uid
        res.status(201).json(contact);
        index(req, res);
    } catch (error) {
        console.log(req.body)
        res.status(401).json({ error: "sorry something went wrong there" })
    }
}

module.exports = {
    index,
    create,
}