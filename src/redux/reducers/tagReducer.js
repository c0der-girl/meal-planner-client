import {
  SET_TAGS,
  TOGGLE_TAG
} from '../types';

const initialState = {
  tags: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    case TOGGLE_TAG:
      return {
        ...state,
        tags: state.tags.map(tag =>
          (tag.tagId === action.payload)
            ? {...tag, selected: !tag.selected}
            : tag)
      };
    default:
      return state;
  }
};