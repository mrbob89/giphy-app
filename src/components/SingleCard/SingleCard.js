import React, { Component } from 'react';
import { isEmpty } from 'ramda';
import Card from 'antd/lib/card';

import './SingleCard.scss';

class SingleCard extends Component {
  static defaultProps = {
    item: {}
  };

  state = {
    loading: true,
    gifIframe: null
  };

  componentDidMount() {
    const { item } = this.props;

    if (!isEmpty(item)) {
      this.setState(() => ({
        gifIframe: (
          <iframe
            src={item.embed_url}
            title={item.title}
            frameBorder="0"
            height="100%"
            width="100%"
            className="iframe"
            allowFullScreen
            onLoad={this.handleLoadingGif}
          />
        )
      }));
    }
  }

  handleLoadingGif = () => {
    this.setState(() => ({
      loading: false
    }));
  };

  render() {
    const { item } = this.props;
    const { gifIframe, loading } = this.state;

    return (
      <div>
        {loading && <div className="hidden">{gifIframe}</div>}
        <Card loading={loading} title={item.title} className="single-card">
          {gifIframe}
        </Card>
      </div>
    );
  }
}

export default SingleCard;
