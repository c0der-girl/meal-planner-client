import {
  SET_MEALS,
  ADD_MEAL,
  TOGGLE_MEAL
} from '../types';
import axios from 'axios';

export const getMeals = () => (dispatch) => {
  axios
    .get('/meals')
    .then((res) => {
      let meals = [];
      res.data.forEach(meal => {
        meals.push({
          selected: false,
          ...meal
        });
      });
      dispatch({
        type: SET_MEALS,
        payload: meals
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const createMeal = (meal) => (dispatch) => {
  axios
    .post('/meal', meal)
    .then((res) => {
      dispatch({
        type: ADD_MEAL,
        payload: {
          mealId: res.data.mealId,
          ...meal
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const toggleMeal = (mealId) => (dispatch) => {
  dispatch({
    type: TOGGLE_MEAL,
    payload: mealId
  });
};