const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:abc1234@cluster0.w38il.mongodb.net/personal-expense-app?retryWrites=true&w=majority';

mongoose.connect(connectionString, { // this connects to mongoDb
    useNewUrlParser: true,
    useCreateIndex: true, // efficient access to data
    useUnifiedTopology: true, //allows intermittent break period, connect to mongoDb
    useFindAndModify: false, // this is a response to changes from mongoDB server
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to mdb ${db.host}:${db.port}`)
});