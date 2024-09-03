const express = require('express');
const router = express.Router();

const Book = require('../models/book-model');

router.get('/', (req, res) => {
    //res.send('Hi there');
    Book.find().lean()
        .then(data => {
            res.render('books/index', { books: data })//({layout: false})
        })
        .catch(err => console.log(`Error durring fetching operation\n${err}`))
});

router.get('/addOrEdit', (req, res) => {
    res.render('books/addOrEdit')
})

router.get('/addOrEdit/:id', (req, res) => {
    Book.findById(req.params.id).lean()
        .then(data => res.render('books/addOrEdit', { book: data }))
        .catch(err => console.log(`Error while retrieving record ...\n${err}`))
})

router.post('/addOrEdit', (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        publishedYear: req.body.year,
    }

    const { _id } = req.body
    console.log(_id)
    if (_id == '') {
        new Book({ ...book }).save()
            .then(data => res.redirect('/books'))
            .catch(err => console.log(`Error durring insertation...\n${err}`));
    }
    else {
        Book.findByIdAndUpdate(_id, book)
            .then(data => res.redirect('/books'))
            .catch(err => console.log(`Error durring updating operation...\n${err}`));
    }

});

router.post('/delete/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(data => res.redirect('/books'))
        .catch(err => console.log(`Error durring deleting operation...\n${err}`));
})

module.exports = router;