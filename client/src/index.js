import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider as Provider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import './index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

// Here you create the HttpLink that will connect your ApolloClient instance with the GraphQL API;
const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider client={client}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
