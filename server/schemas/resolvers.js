const { User, Moderator, Post } = require('../models');
const { AuthenticationError } = require("apollo-server-errors");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    post: async (parent, args) => {
      const postData = await Post.findOne({ body: args.body });

      return postData;
    }
  },
  Mutation: {
    userLogin: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = signToken(user);

      return { token, user };
    },
    moderatorLogin: async (parent, { email, password }) => {
      const moderator = await Moderator.findOne({ email });

      if (!moderator) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPassword = await moderator.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Invalid credentials");
      }
      const token = signToken(moderator);

      return { token, moderator };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addModerator: async (parent, args) => {
      const moderator = await Moderator.create(args);
      const token = signToken(moderator);

      return { token, moderator };
    },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      const token = signToken(post);

      return { token, post };
    },
    removePost: async (parent, args) => {
      const post = await Post.findOneAndDelete({_id: args._id});

      return post;
    }
  },
};

module.exports = resolvers;
