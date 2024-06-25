const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const techData = require('./techData.json');

db.once('open', async () => {
  await cleanDB('User', 'teches');

  await User.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
