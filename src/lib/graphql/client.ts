import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://54.180.104.159:8000/graphql'
});

export default client;
