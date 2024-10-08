const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const connectDb = require('./db');
const bookRoutes = require('./controllers/book-controller');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/books', bookRoutes);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    extname: 'hbs',//handlebars
    layoutsDir: path.join(__dirname, 'views/layouts'),
    //defaultLayout: 'mainLayout.hbs',
}));
app.set('view engine', '.hbs')

/* const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}...`)
}).on('error', err => console.log(`SERVER ERROR\n${err}`)); */

connectDb()
    .then(data => {
        console.log('DB connection succeeded!');

        const PORT = process.env.PORT || 5002;
        app.listen(PORT, () => {
            console.log(`Server listen at port ${PORT}...`)
        }).on('error', err => console.log(`SERVER ERROR\n${err}`));

    }).catch(err => console.log(`Error in connecting DB\n${err}`));