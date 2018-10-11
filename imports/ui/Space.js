import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Tasks } from '../api/spaces.js';

// Space component - represents a single space for rent
export default class Space extends Component {
  buttonClicked() {
    // Set the checked property to the opposite of its current value
    Meteor.call(
      'spaces.setBooked',
      this.props.space._id,
      !this.props.space.booked
    );
  }

  deleteThisSpace() {
    Meteor.call('spaces.remove', this.props.space._id);
  }

  render() {
    return (
      <div id={this.props.space._id} className="space">
        <div>
          <div className="space-owner">
            <label htmlFor="owner">Owner:</label>
            <p name="owner">{this.props.space.username}</p>
          </div>
          <h1 className="space-name">{this.props.space.name}</h1>
          <button className="delete" onClick={this.deleteThisSpace.bind(this)}>
            &times;
          </button>
        </div>
        <p className="space-description">{this.props.space.description}</p>
        <div className="space-price">
          <label htmlFor="price">Price per night: </label>
          <span name="price">{this.props.space.price}</span>
          <button className="booking" onClick={this.buttonClicked.bind(this)}>
            Book this space!
          </button>
        </div>
      </div>
    );
  }
}
