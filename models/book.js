var mongoose = require( 'mongoose' );

// all model classes will inherit from
// the mongoose.Schema class
var BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Book title is required.'
    },
    author: {
        type: String,
        required: 'Book author is required.'
    },

    price: {
        type: Number,
        required: 'Book price is required.'
    },

    year: {
        type: Number,
        required: 'Year is required.'
    }
});
// make this class public
module.exports = mongoose.model( 'Book', BookSchema );
