import React, { Component } from 'react';


// Space component - represents a single space for rent
export default class Space extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.space.name}</h1>
        <h3>{this.props.space.description}</h3>
        <h4>{this.props.space.price}</h4>
      </div>
    );
  }
}
