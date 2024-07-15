const db = require('../config/connection');
const { User, Book } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const bookData = require('./bookData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Book', 'books');


  await User.create(userData);
  await Book.create(bookData);

  //console.log('Users seeded!');
  //console.log('Books seeded!');
  process.exit(0);
});