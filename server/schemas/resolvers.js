const { User } = require('../models');
const { AuthenticationError } = require("apollo-server-errors");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        singleUser: async ( { username }) => {
            return User.findOne({ username })
        },
    },

    Mutation: {
        createUser: async ( parent, args) => {
            console.log(username, email, password);
            const user = await User.create(args);

            const token = signToken(user);

            return { token, user };
        },
        login: async ( { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('No User Found');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async ( { bookID }, context) => {
            return User.findOneAndUpdate(
                { _id: context.user_id },
                { $addToSet: {savedBooks: {bookId: bookID } } },
                { new: true, runValidators: true }
            );
            
        },
        deleteBook: async( { bookID }, context) => {
            return User.findOneAndUpdate(
                { _id: context.user_id},
                { $pull: { savedBooks: { bookId: bookID } } },
                { new: true }
            )
        }
    }
};

module.exports = resolvers;