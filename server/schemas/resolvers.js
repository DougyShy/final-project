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
    books: async () => {
      return Book.find();
    },
    book: async (parent, { _id }) => {
      return Book.findOne({ _id });
    },
    getBooksByIds: async (parent, args, context, info) => {
      const { ids } = args;
      return (await Book.find()).filter(book => ids.includes(book._id));
    }
  },
  
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    }, 
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addBookToCart: async (parent, { username, bookID }) => {
      try {
        // Find the user by their username
        const user = await User.findOne({ username });
    
        if (!user) {
          throw new Error('User not found');
        }
    
        // Find the book by its ID to ensure it exists
        const book = await Book.findById(bookID);
    
        if (!book) {
          throw new Error('Book not found');
        }
    
        // Add the book's ObjectId to the user's cart
        user.cart.push(book);
    
        // Save the updated user document
        await user.save();
    
        //console.log('Book added to cart:', book);
        return book;
      } catch (error) {
        console.error('Error adding book to cart:', error);
        throw error;
      }
    }
  }
};

module.exports = resolvers;
