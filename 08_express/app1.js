const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

_title = {
    title_index: 'Home',
    title_about: 'About',
    title_create: 'Create'
};

app.get('/', (req, res) => {
    res.render('index', _title);
});

app.get('/about', (req, res) => {
    res.render('about', _title);
});

app.get('/create', (req, res) => {
    res.render('create', _title);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});