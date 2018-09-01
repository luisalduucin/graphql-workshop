const { ApolloServer } = require('apollo-server');
const Giphy = require('./services/Giphy');

const typeDefs = `
  type Query {
    hello: String,
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'Bienvenidos al workshop!';
    }
  }
};

const context = {
  giphy: new Giphy(),
};

const playground = {
  settings: {
    'editor.theme': 'light',
    'editor.cursorShape': 'line',
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context, playground });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});
