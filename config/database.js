const mongoose = require('mongoose');

const connectionURI = process.env.DATABASE_URI;

mongoose.connect(connectionURI, { // this connects to mongoDb
    useNewUrlParser: true,
    useCreateIndex: true, // efficient access to data
    useUnifiedTopology: true, //allows intermittent break period, connect to mongoDb
    useFindAndModify: false, // this is a response to changes from mongoDB server
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to mdb ${db.host}:${db.port}`)
});