import {
  ApolloClient,
  InMemoryCache,
 
} from "@apollo/client";
export  const client = new ApolloClient({
  uri: 'https://dev-api.coaxcloud.com/graphql',
  cache: new InMemoryCache()
});