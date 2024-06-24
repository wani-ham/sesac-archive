const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('*', (req,res) => {
    res.render('404');
})

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running at PORT ${PORT}`);
});