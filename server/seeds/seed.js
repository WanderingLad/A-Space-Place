const db = require('../config/connection');
const { User, Moderator, Post } = require('../models');

const userData = require('./userData.json');
const moderatorData = require('./moderatorData.json');
const postData = require('./postData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
