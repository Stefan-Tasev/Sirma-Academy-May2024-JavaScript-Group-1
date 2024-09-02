const express = require('express');
const router = express.Router();

const Book = require('../models/book-model');

router.get('/', (req, res) => {
    //res.send('Hi there');
    Book.find().lean()
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(`Error durring fetching operation\n${err}`))
});

module.exports = router;