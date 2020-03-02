import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import TodoDate from './components/TodoDate';
import Progress from './components/Progress';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <TodoDate />
      <Progress />
    </View>
  );
};

export default App;
