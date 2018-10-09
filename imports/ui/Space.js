import React, { Component } from 'react';


// Space component - represents a single space for rent
export default class Space extends Component {
  render() {
    return <li>{this.props.space.name}</li>;
  }
}
