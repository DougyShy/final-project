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

  genre: {
    type: String,
    required: true,
    unique: false
  },

  year: {
    type: Number,
    required: false,
    unique: false
  },

  img_URL: {
    type: String,
    required: false,
    unique: false
  },

  rating: {
    type: Number,
    require: false,
    unique: false
  },

  price: {
    type: Number, 
    require: true,
    unique: false
  }
  
});

const Book = model('Book', bookSchema);

module.exports = Book;