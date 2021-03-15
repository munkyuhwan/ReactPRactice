/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import MovieListContainer from './Containers/MovieListContainer';
import reducer from './Reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <MovieListContainer/>
    </Provider>
  )
};


export default App;
