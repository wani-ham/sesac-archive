const { commentData } = require('../model/comment');

exports.getMain = (req, res) => {
    res.render('index', {title: 'MVC'});
}

exports.getComments = (req, res) => {
    res.render('comments', {comments: commentData()});
}

exports.getComment = (req, res) => {
    const comments = commentData();
    if(req.params.id > comments.length) return res.render('404') ;
    res.render('comment', {comment: comments[req.params.id - 1]});
}