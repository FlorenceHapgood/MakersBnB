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
        <h3 className="space-name">{this.props.space.name}</h3>
        <button className="delete" onClick={this.deleteThisSpace.bind(this)}>
          &times;
        </button>

        <div className="space-owner">
        <p name="owner"> Owner: {this.props.space.username}</p>
        </div>
        </div>

        <p className="space-description">{this.props.space.description}</p>

        <div className="space-price">
          <label htmlFor="price">Price: </label>
          <span name="price">£{this.props.space.price}/night</span>

          <p>
          { !this.props.space.booked ?
          <button className="booking" onClick={this.buttonClicked.bind(this)}>
            Book this space!
            </button>
            :  <p> {this.props.space.bookedBy} booked {this.props.space.name} </p>
          }
          </p>
          </div>
        </div>
    );
  }
}
