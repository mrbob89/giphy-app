import React, { Component } from 'react';
import { equals, isEmpty } from 'ramda';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { SingleCard } from '../../components';
import ViewProvider from '../../data/providers/viewProvider';

import './View.scss';

class View extends Component {
  static defaultProps = {
    items: []
  };

  state = {
    noResults: false
  };

  componentWillReceiveProps(nextProps) {
    const { items } = nextProps;

    if (!equals(items, this.props.items) || isEmpty(items)) {
      this.setState(() => ({
        noResults: isEmpty(items)
      }));
    }
  }

  renderItems = () => {
    const { items } = this.props;
    const { noResults } = this.state;

    if (noResults) {
      return (
        <Row type="flex" align="middle" justify="center" className="no-match">
          <h2>Gifs with such query weren't found</h2>
        </Row>
      );
    }

    return items.map((item, index) => (
      <Col span={6} key={item.id}>
        <SingleCard item={item} />
      </Col>
    ));
  };

  render() {
    return (
      <Row gutter={20} type="flex">
        {this.renderItems()}
      </Row>
    );
  }
}

export default ViewProvider(View);
