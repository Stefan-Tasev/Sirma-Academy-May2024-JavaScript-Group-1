const express = require('express');

const app = express();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>{
    console.log(`Server listen at port ${PORT}...`)
}).on('error', err => console.log(`SERVER ERROR\n${err}`));