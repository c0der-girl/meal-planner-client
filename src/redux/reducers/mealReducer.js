import {
  SET_MEALS,
  ADD_MEAL,
  TOGGLE_MEAL
} from '../types';

const initialState = {
  meals: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MEALS:
      return {
        ...state,
        meals: action.payload
      };
    case ADD_MEAL:
      return {
        ...state,
        meals: [action.payload, ...state.meals]
      };
    case TOGGLE_MEAL:
      return {
        ...state,
        meals: state.meals.map(meal =>
          (meal.mealId === action.payload)
            ? {...meal, selected: !meal.selected}
            : meal)
      };
    default:
      return state;
  }
};