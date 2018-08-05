var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res,) => {
    res.render('index', {
        title: 'Book',
        author: '',
        price: '',
        year: '',


    });
});


module.exports = router;
