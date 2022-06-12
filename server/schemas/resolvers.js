const { User, Moderator, Post, Body } = require('../models');
const { AuthenticationError } = require("apollo-server-errors");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    post: async (parent, args) => {
      return await Post.findOne({ _id: args._id });
    },
    posts: async (parent, args) => {
      return await Post.find({ body: args.body });
    },
    userPost: async (parent, args) => {
      return await Post.find({ user: args.user });
    },
    approvePost: async (parent, args) => {
      return await Post.find({ approved: args.approved });
    },
    user: async (parent, args) => {
      return await User.findOne({ email: args.email });
    },
    users: async (parent, args) => {
      return await User.find();
    },
    moderator: async (parent, args) => {
      return await Moderator.findOne({ email: args.email });
    },
    body: async (parent, args) => {
      return await Body.findOne({ id: args.id });
    },
  },
  Mutation: {
    userLogin: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid Email");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Invalid Password");
      }
      const token = signToken(user);

      return { token, user };
    },
    moderatorLogin: async (parent, { email, password }) => {
      const moderator = await Moderator.findOne({ email });

      if (!moderator) {
        throw new AuthenticationError("Invalid Email");
      }

      const correctPassword = await moderator.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Invalid Password");
      }
      const token = signToken(moderator);

      return { token, moderator };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      const token = signToken(post);

      return { token, post };
    },
    removePost: async (parent, args, context) => {
      return await Post.findOneAndDelete({ _id: args._id });
    },
    removeUser: async (parent, args, context) => {
      return await User.findOneAndDelete({ _id: args._id });
    },
    approvePosts: async (parent, args, context) => {
      return await Post.findOneAndUpdate({ _id: args._id }, { approved: true });
    }
  },
};

module.exports = resolvers;
