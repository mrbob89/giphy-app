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
    loadingItems: false,
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
  };

  renderMatchedOptions = () => {
    const { matchedOptions } = this.props;

    return matchedOptions.map(item => <Option key={item}>{item}</Option>);
  };

  render() {
    const { currentSearchedQuery, loadingItems } = this.props;

    return (
      <Row gutter={20} className="search-bar">
        <Col span={12} offset={6}>
          <Select
            mode="combobox"
            size="large"
            placeholder="Please enter gif name"
            value={currentSearchedQuery}
            onInputKeyDown={e =>
              e.keyCode === 13 && this.handleSearchNewItems()
            }
            onChange={this.handleChangeSearchedQuery}
          >
            {this.renderMatchedOptions()}
          </Select>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            size="large"
            loading={loadingItems}
            onClick={this.handleSearchNewItems}
          >
            Search
          </Button>
        </Col>
      </Row>
    );
  }
}

export default SearchBarProvider(SearchBar);
