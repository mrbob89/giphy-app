import React, { Component } from 'react';
import { Button, Select } from '../../components';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import './SearchBar.scss';

class SearchBar extends Component {
  render() {
    return (
      <Row gutter={20} className="search-bar">
        <Col span={12} offset={6}>
          <Select
            mode="combobox"
            size="large"
            placeholder="Please enter gif name"
          />
        </Col>
        <Col span={4}>
          <Button type="primary" size="large">
            Search
          </Button>
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
