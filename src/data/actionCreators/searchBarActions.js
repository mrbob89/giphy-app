import axios from 'axios';
import message from 'antd/lib/message';
import { API_URL, API_KEY } from '../../config';
import {
  CHANGE_LOADING_INFO,
  CHANGE_SEARCHED_GIF_NAME,
  GET_DATA_FROM_API,
  UPDATE_SEARCHED_QUERIES
} from '../actions';

const warning = text => {
  message.warning(text);
};

const getDataFromApi = () => async (dispatch, getState) => {
  const { currentSearchedQuery: q } = getState();

  dispatch({
    type: CHANGE_LOADING_INFO,
    loading: true
  });

  const items = await axios
    .get(`${API_URL}search?api_key=${API_KEY}&q=${q}&limit=25&rating=G&lang=en`)
    .then(({ data = {} }) => data.data);

  dispatch({
    type: GET_DATA_FROM_API,
    items
  });
  dispatch({
    type: CHANGE_LOADING_INFO,
    loading: false
  });
};

export const changeSearchedGifName = query => ({
  type: CHANGE_SEARCHED_GIF_NAME,
  query
});

export const getNewGifs = () => (dispatch, getState) => {
  const { currentSearchedQuery, previouslySearchedQueries } = getState();

  if (currentSearchedQuery && currentSearchedQuery !== previouslySearchedQueries[0]) {
    dispatch(getDataFromApi());
    dispatch(updateSearchedQueries());
  } else if (!currentSearchedQuery) {
    warning('Please enter query!');
  }
};

export const updateSearchedQueries = () => (dispatch, getState) => {
  const { currentSearchedQuery } = getState();

  dispatch({
    type: UPDATE_SEARCHED_QUERIES,
    query: currentSearchedQuery
  });
};
