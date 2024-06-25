const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true, // does this have to be true? Can't multiple authors have books titled the same??
  },
  author: {
    type: String,
    required: true,
    unique: false,
  },
});

const Book = model('Book', bookSchema);

module.exports = Book;