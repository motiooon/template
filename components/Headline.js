import React, { Component, PropTypes } from 'react';

export default class Headline extends Component {
  static propTypes = {
    text: PropTypes.text.isRequired,
  };

  render() {
    const {text} = this.props;
    return (
      <h1>{text}</h1>
    );    
  }

}