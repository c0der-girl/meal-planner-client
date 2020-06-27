import {
  SET_MEALS,
  ADD_MEAL
} from '../types';
import axios from 'axios';

export const getMeals = () => (dispatch) => {
  axios
    .get('/meals')
    .then((res) => {
      dispatch({
        type: SET_MEALS,
        payload: res.data
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