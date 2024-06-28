const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/Rindex');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running in PORT: ${PORT}`);
})



