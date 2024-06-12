const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

_locals = {
    title: "Node.js + Express with view engine", 
    content: "Hello World!! This is a test content."
};

app.get('/', (req, res) => {
    res.render('index', _locals);
});

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});