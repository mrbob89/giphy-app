import axios from 'axios';
import { API_URL } from '../../config';
import {
  CHANGE_SEARCHED_GIF_NAME,
  GET_DATA_FROM_API,
  UPDATE_SEARCHED_QUERIES
} from '../actions';

const getDataFromApi = async () => {
  const items = await axios.get(API_URL);

  return {
    type: GET_DATA_FROM_API,
    items
  };
};

export const changeSearchedGifName = query => ({
  type: CHANGE_SEARCHED_GIF_NAME,
  query
});

export const getNewGifs = () => dispatch => {
  dispatch(getDataFromApi());
  dispatch(updateSearchedQueries());
}

export const updateSearchedQueries = () => (dispatch, getState) => {
  const { currentSearchedQuery } = getState();

  dispatch({
    type: UPDATE_SEARCHED_QUERIES,
    query: currentSearchedQuery
  });
}
