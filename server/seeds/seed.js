const db = require('../config/connection');
const { User, Moderator, Post, Body } = require('../models');
const bcrypt = require('bcryptjs');

const userData = require('./userData.json');
const moderatorData = require('./moderatorData.json');
const postData = require('./postData.json');
const bodyData = require('./bodyData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const userHashed = await userData.map(async (user) => {
    let temp = Object.assign({}, user);
    temp.password = await bcrypt.hash(temp.password, 10);
    return temp;
  });

  const userPromised = await Promise.all(userHashed);

  await User.insertMany(userPromised);

  console.log('Users seeded!');

  await Moderator.deleteMany({});

  const moderatorHashed = await moderatorData.map(async (moderator) => {
    let temp = Object.assign({}, moderator);
    temp.password = await bcrypt.hash(temp.password, 10);
    return temp;
  });

  const moderatorPromised = await Promise.all(moderatorHashed);

  await Moderator.insertMany(moderatorPromised);

  console.log('Moderators seeded!');

  await Post.deleteMany({});

  await Post.insertMany(postData);

  console.log('Posts seeded!');

  await Body.deleteMany({});

  await Body.insertMany(bodyData);

  console.log('Bodies seeded!');
  process.exit(0);
});
