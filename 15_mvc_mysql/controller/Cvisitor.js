const Visitor = require('../model/visitor');

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {
    // res.render('visitor', { data: Visitor.getVisitors() });
    Visitor.getVisitors((result) => {
        //result : model/visitor.js의 getVisitors의 cb(rows)의 'rows'와 대응
        console.log(result);
        res.render('visitor', { data: result });
    })
};

exports.postVisitor = (req, res) => {
    console.log(req.body);
    Visitor.postVisitor(req.body, (result) => {
        // result -> rows.insertId
        console.log('controller/CVisitor.js >> ', result);
    })
    res.send({id: result,
        name: req.body.name,
        comment: req.body.comment
    })
};