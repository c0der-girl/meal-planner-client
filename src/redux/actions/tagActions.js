import {
  SET_TAGS,
  TOGGLE_TAG
} from '../types';
import axios from 'axios';

export const getTags = () => (dispatch) => {
  axios
    .get('/tags')
    .then((res) => {
      let tags = [];
      res.data.forEach(tag => {
        tags.push({
          selected: false,
          ...tag
        });
      });

      dispatch({
        type: SET_TAGS,
        payload: tags
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const toggleTag = (tagId) => (dispatch) => {
  dispatch({
    type: TOGGLE_TAG,
    payload: tagId
  });
};