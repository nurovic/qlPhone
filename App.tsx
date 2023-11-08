import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ScreenNavigator from './navigators/ScreenNavigator';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <ScreenNavigator />
  </ApolloProvider>
);

export default App;

const styles = StyleSheet.create({});
