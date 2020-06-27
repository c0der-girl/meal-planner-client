import {
  SET_MEALS,
  ADD_MEAL
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
    default:
      return state;
  }
};