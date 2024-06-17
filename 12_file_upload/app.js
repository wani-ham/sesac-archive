const express = require('express');
const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const multer = require('multer');
const upload = multer({
    dest: 'uploads/',
});
app.post('/upload', upload.single('userfile'), (req,res) => {
    console.log(req.file);
    console.log(req.body);
    res.render('result');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running in port ${PORT}`);
})