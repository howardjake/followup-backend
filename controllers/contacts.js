const Contact = require('../models/contact');


const index = async (req, res) => {
    try {
        const contact = await Contact.find({uid: req.query.uid}).sort('lastContacted');
        res.json(contact);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "sorry something went wrong there"});
    }
}

async function create(req, res) {
    try {
    const contact = await Contact.create(req.body);
    req.query.uid = contact.uid;
        index(req, res);
    } catch (error) {
        console.log(req.body)
        console.log(error)
        res.status(401).json({ error: "sorry something went wrong there" })
    }
}

async function update(req, res) {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        req.query.uid = updatedContact.uid
        index(req, res)
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

async function deleteOne(req, res) {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        req.query.uid = deletedContact.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

module.exports = {
    index,
    create,
    update,
    delete: deleteOne,
}