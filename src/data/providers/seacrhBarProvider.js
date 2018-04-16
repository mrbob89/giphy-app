import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { changeSearchedGifName, getNewGifs } from '../actionCreators/searchBarActions';

const currentSearchedQuerySelector = ({ currentSearchedQuery }) =>
  currentSearchedQuery;
const loadingItemsSelector = ({ loadingItems }) => loadingItems;
const matchedOptionsSelector = ({ previouslySearchedQueries }) =>
  previouslySearchedQueries.filter((item, index) => index < 5);

const select = createStructuredSelector({
  currentSearchedQuery: currentSearchedQuerySelector,
  loadingItems: loadingItemsSelector,
  matchedOptions: matchedOptionsSelector
});

export default connect(select, { changeSearchedGifName, getNewGifs });
