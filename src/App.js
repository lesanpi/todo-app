import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import TodoDate from './components/TodoDate';
import Progress from './components/Progress';
import ItemsList from './components/ItemsList';
import Input from './components/Input';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ScrollView>
      <TodoDate />
      <Progress />
      <ItemsList />
      <Input />
    </ScrollView>
  );
};

export default App;
