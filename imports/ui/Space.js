import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/spaces.js';



// Space component - represents a single space for rent
export default class Space extends Component {

  deleteThisSpace() {
    console.log("hello")
   Meteor.call('space.remove', this.props.space._id);
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
          <h4>{this.props.space.price}</h4>
        </div>
    );
  }
}
