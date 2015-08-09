import React, { Component, PropTypes } from 'react';
import Headline from './Headline';

export default class MainContent extends Component {

  // This could have some layout props
  static propTypes = {
    
  };

  render() {
    return (
      <Headline />
    );    
  }

}