import {
  CHANGE_LOADING_INFO,
  CHANGE_SEARCHED_GIF_NAME,
  GET_DATA_FROM_API,
  UPDATE_SEARCHED_QUERIES
} from '../actions';

const defaultState = {
  currentSearchedQuery: '',
  previouslySearchedQueries: [],
  foundedItems: [],
  loadingItems: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOADING_INFO: {
      return {
        ...state,
        loadingItems: action.loading
      };
    }

    case CHANGE_SEARCHED_GIF_NAME: {
      return {
        ...state,
        currentSearchedQuery: action.query
      };
    }

    case GET_DATA_FROM_API: {
      return {
        ...state,
        foundedItems: action.items
      };
    }

    case UPDATE_SEARCHED_QUERIES: {
      return {
        ...state,
        previouslySearchedQueries: [
          action.query,
          ...state.previouslySearchedQueries.filter(i => i !== action.query)
        ]
      };
    }

    default:
      return state;
  }
};
