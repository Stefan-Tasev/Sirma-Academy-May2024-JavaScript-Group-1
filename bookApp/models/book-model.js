const mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
    title: String,
    author: String,
    price: Number,
    publishedYear: Number,
});