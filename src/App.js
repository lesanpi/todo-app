import React from 'react';
import TodoDate from './components/TodoDate';
import Progress from './components/Progress';
import ItemsList from './components/ItemsList';
import Input from './components/Input';
import {AppStateProvider} from './AppContext';

const App = () => {
  return (
    <AppStateProvider>
      <TodoDate />
      <Progress />
      <Input />
      <ItemsList />
    </AppStateProvider>
  );
};

export default App;
