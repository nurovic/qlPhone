import React from 'react';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScreenNavigator from './navigators/ScreenNavigator';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});
const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

// const client = new ApolloClient({
//   uri: 'https://countries.trevorblades.com/graphql',
//   cache: new InMemoryCache()
// });
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const App = () => (
  <ApolloProvider client={client}>
    <ScreenNavigator />
  </ApolloProvider>
);

export default App;
