// Connect to DB
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(`${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


db.on('connected', function() {
    console.log(`connected to mongoDb ${db.host}:${db.port}`)
})