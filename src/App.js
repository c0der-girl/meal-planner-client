import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.css';

import TagList from './components/tagList/TagList';
import MealList from './components/mealList/MealList';
import MealForm from './components/mealForm/MealForm';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <div className="left-col">
          <TagList></TagList>
          <MealList></MealList>
        </div>
        <div className="right-col">
          <MealForm></MealForm>
        </div>
      </Provider>
    </div>
  );
}

export default App;
