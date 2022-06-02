const { Schema, model } = require('mongoose');

const moderatorSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    }
  }
);

const Moderator = model('Moderator', moderatorSchema);

module.exports = Moderator;