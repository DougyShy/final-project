const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false, // does this have to be true? Can't multiple authors have books titled the same??
  },
  author: {
    type: String,
    required: true,
    unique: false,
  },
  /*comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],*/

});

const Book = model('Book', bookSchema);

module.exports = Book;