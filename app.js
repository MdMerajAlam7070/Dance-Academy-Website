const express = require('express');
// const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;


// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')); // for serving static file.
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the template engine as pug.
app.set('views',path.join(__dirname,'views') ); // set the views directory.

// END POINTS
app.get('/',(req,res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/contact',(req,res)=>{
    const params = {};
    res.status(200).render('contact.pug', params);
})

// START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});