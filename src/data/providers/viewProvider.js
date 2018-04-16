import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const itemsSelector = ({ foundedItems }) => foundedItems;

const select = createStructuredSelector({
  items: itemsSelector
});

export default connect(select);
