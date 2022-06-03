const db = require('../config/connection');
const { User, Moderator, Post } = require('../models');

const userData = require('./userData.json');
const moderatorData = require('./moderatorData.json');
const postData = require('./postData.json');

db.once('open', async () => {
  await User.deleteMany({});

  await User.insertMany(userData);

  console.log('Users seeded!');

  await Moderator.deleteMany({});

  await Moderator.insertMany(moderatorData);

  console.log('Moderators seeded!');

  await Post.deleteMany({});

  await Post.insertMany(postData);

  console.log('Posts seeded!');
  process.exit(0);
});
