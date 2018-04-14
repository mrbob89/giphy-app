import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import SelectAntd from 'antd/lib/select';
import { Button, Select } from '../../components';
import SearchBarProvider from '../../data/providers/seacrhBarProvider';

import './SearchBar.scss';

const { Option } = SelectAntd;

class SearchBar extends Component {
  static defaultProps = {
    currentSearchedQuery: '',
    matchedOptions: [],
    changeSearchedGifName: () => false,
    getNewGifs: () => false
  };

  handleChangeSearchedQuery = value => {
    const { changeSearchedGifName } = this.props;

    changeSearchedGifName(value);
  };

  handleSearchNewItems = () => {
    const { getNewGifs } = this.props;

    getNewGifs();
  }

  renderMatchedOptions = () => {
    const { matchedOptions } = this.props;

    if (matchedOptions.length !== 0) {
      return matchedOptions.map(item => <Option key={item}>{item}</Option>);
    }

    return matchedOptions;
  };

  render() {
    const { currentSearchedQuery } = this.props;

    return (
      <Row gutter={20} className="search-bar">
        <Col span={12} offset={6}>
          <Select
            mode="combobox"
            size="large"
            placeholder="Please enter gif name"
            value={currentSearchedQuery}
            onChange={this.handleChangeSearchedQuery}
          >
            {this.renderMatchedOptions()}
          </Select>
        </Col>
        <Col span={4}>
          <Button type="primary" size="large" onClick={this.handleSearchNewItems}>
            Search
          </Button>
        </Col>
      </Row>
    );
  }
}

export default SearchBarProvider(SearchBar);
