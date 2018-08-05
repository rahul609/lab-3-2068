var express = require('express');
var router = express.Router();


// create a link to our book model
var booksController = require('../controllers/booksController');

// index (http://my-app.com/books)
router.get( '/', booksController.index );

// new
router.get( '/new', booksController.new );
// create
router.post( '/', booksController.create );

// edit
router.get( '/:id/edit', booksController.edit );

// show
router.get( '/:id', booksController.show );


// update
router.post( '/:id', booksController.update );

// delete
router.post( '/:id/delete', booksController.delete );






// makes our file public to the application
module.exports = router;