const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req, res) => {
    res.send("<h1>This is Home Page</h1>")
});

app.get('/login',(req,res) => {
    res.send("<h1>This is Login Page</h1>")
});

app.get('/contactus', (req, res) => {
    res.send("<h1>This is Contact us Page</h1>")
});

app.listen(port, ()=> {
    console.log(`app is listening on port : - ${port}`)
})