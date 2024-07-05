const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    // This would be similar to adding a comment to a book?
    /*thought: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },*/
    books: async () => {
      return Book.find();
    },
  },
  
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    }, 
    login: async (parent, { email, password }) => {
      console.log(email + password)
      const user = await User.findOne({ email });


      console.log("HERE IN MUTATIONS")
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;
