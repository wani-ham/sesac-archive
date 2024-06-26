const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/Rindex');
const playerRouter = require('./routes/Rplayer');
const teamRouter = require('./routes/Rteam');
const { sequelize } = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);
app.use('/players', playerRouter);
app.use('/teams', teamRouter);

sequelize   
    // force: true = 서버 실행때마다 테이블을 재생성
    // force: false = 서버 실행때마다 테이블이 없으면 생성
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connected!');
            console.log(`Server running in PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err)
    });





