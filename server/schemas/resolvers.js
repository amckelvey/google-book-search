const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    }
  },

  Mutation: {
    nameTBD: async (parent, { username, email, password }) => {
  
    }
  },
};

module.exports = resolvers;
