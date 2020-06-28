import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.css';

import TagList from './components/TagList';
import MealList from './components/MealList';
import MealForm from './components/MealForm';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <TagList></TagList>
        <MealForm></MealForm>
        <MealList></MealList>
      </Provider>
    </div>
  );
}

export default App;
