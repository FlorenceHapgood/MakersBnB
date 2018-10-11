import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Tasks } from '../api/spaces.js';

// Space component - represents a single space for rent
export default class Space extends Component {
  buttonClicked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('spaces.setBooked', this.props.space._id, !this.props.space.booked);
  }

  deleteThisSpace() {
   Meteor.call('spaces.remove', this.props.space._id);
 }

  render() {
    return (
        <div className="space">
          <h1>{this.props.space.username}</h1>
          <button className="delete" onClick={this.deleteThisSpace.bind(this)}>
            &times;
          </button>
          <h1>{this.props.space.name}</h1>
          <h3>{this.props.space.description}</h3>
          <h4>£{this.props.space.price}/night</h4>
           { !this.props.space.approved ?
            <button className="booking" onClick={this.buttonClicked.bind(this)}>
              Book now!
            </button>
          : this.props.space.bookedBy + ' booked ' + this.props.space.name
 }
        </div>
    );
  }
}
