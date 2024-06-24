const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// DB에서 가져온 데이터라고 가정
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
];

app.get('/', (req, res) => {
    res.render('index', {title: 'MVC'});
});

app.get('/comments', (req, res) => {
    res.render('comments', {comments});
});

// 요청의 주소에서 "변수"를 사용하는 방법 -> :
app.get('/comment/:id', (req, res) => {
    if(req.params.id > comments.length) return res.render('404') ;
    res.render('comment', {comment: comments[req.params.id - 1]});
});

app.get('*', (req,res) => {
    res.render('404');
})

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running at PORT ${PORT}`);
});