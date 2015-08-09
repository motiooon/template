import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';

export default class Sidebar extends Component {

  static propTypes = {
    componentId: PropTypes.text.isRequired
  };

  onSetSidebarOpen (open) {
    this.setState({sidebarOpen: open});
  }; 

  render() {
    const {text} = this.props;
    let	 sidebarContent = <b>Sidebar content</b>;
    return (
      <Sidebar sidebar={sidebarContent}
               open={true}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );    
  }
}