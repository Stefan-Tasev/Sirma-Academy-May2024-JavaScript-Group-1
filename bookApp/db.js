const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://stefan:user123@cluster0.ymwrm.mongodb.net/book_register_db?retryWrites=true&w=majority&appName=Cluster0';

module.exports = () => { return mongoose.connect(dbUri) };
//module.exports = () => mongoose.connect(dbUri);