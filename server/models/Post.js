const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      unique: true,
    },
    link: {
      type: String,
    }
  }
);

const Post = model('Post', postSchema);

module.exports = Post;