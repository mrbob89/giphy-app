import React, { Component } from 'react';
import { Button, Select } from '../../components';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Select mode="combobox" placeholder="Please enter gif name"></Select>
        <Button type="primary">Search</Button>
      </div>
    );
  }
}

export default SearchBar;
