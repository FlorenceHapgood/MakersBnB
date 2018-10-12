import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Tasks } from '../api/spaces.js';

// Space component - represents a single space for rent
export default class Space extends Component {
  buttonBookSpaceClicked() {
    // Set the checked property to the opposite of its current value
    Meteor.call(
      'spaces.setRequest',
      this.props.space._id,
      true
    );
  }

  buttonApproveBookingClicked() {
    Meteor.call(
      'spaces.setBooked',
      this.props.space._id,
      true
    )
  }

  deleteThisSpace() {
    Meteor.call('spaces.remove', this.props.space._id);
  }

  currentUserIsOwner() {
    let currentUser = Meteor.user();
    return (
      this.props.space.username ===
      (currentUser === null ? '' : currentUser.username)
    );
  }

  spaceCanBeBooked() {
    return !this.props.space.booked && !this.currentUserIsOwner() && this.userSignedIn();
  }

  spaceCanBeApproved() {
    return this.props.space.requested && this.currentUserIsOwner() && this.userSignedIn() && !this.props.space.booked;
  }

  userSignedIn() {
    return Meteor.user() !== null
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
          <span name="price">
            £{this.props.space.price}
            /night
          </span>
          {this.spaceCanBeBooked() ? (
            <button
              className="booking"
              onClick={this.buttonBookSpaceClicked.bind(this)}
            >
              Book this space!
            </button>
          ) : (this.spaceCanBeApproved() ? (
            <button
              className="booking"
              onClick={this.buttonApproveBookingClicked.bind(this)}
            >
              Approve Booking
            </button>
          ) : ( this.props.space.booked  ?
            <p>
              {this.props.space.bookedBy} booked {this.props.space.name}
            </p> : ''
          )
        )}
        </div>
      </div>
  )}
}
