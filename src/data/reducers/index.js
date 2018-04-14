import { CHANGE_SEARCHED_GIF_NAME, UPDATE_SEARCHED_QUERIES } from '../actions';

const defaultState = {
  currentSearchedQuery: '',
  previouslySearchedQueries: [],
  foundedItems: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCHED_GIF_NAME: {
      return {
        ...state,
        currentSearchedQuery: action.query
      };
    }

    case UPDATE_SEARCHED_QUERIES: {
      return {
        ...state,
        previouslySearchedQueries: [action.query, ...state.previouslySearchedQueries]
      }
    }

    default: return state;
  }
}
