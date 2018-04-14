import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { changeSearchedGifName, getNewGifs } from '../actionCreators/searchBarActions';

const currentSearchedQuerySelector = ({ currentSearchedQuery }) =>
  currentSearchedQuery;
const matchedOptionsSelector = ({ previouslySearchedQueries }) =>
  previouslySearchedQueries;

const select = createStructuredSelector({
  currentSearchedQuery: currentSearchedQuerySelector,
  matchedOptions: matchedOptionsSelector
});

export default connect(select, { changeSearchedGifName, getNewGifs });
