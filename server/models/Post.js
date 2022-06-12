const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    user: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    approved: {
      type: Boolean,
      default: false,
      required: true
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  }
);

const Post = model('Post', postSchema);

module.exports = Post;