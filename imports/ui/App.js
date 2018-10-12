import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Spaces } from '../api/spaces.js';
import Space from './Space.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the name field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    const description = ReactDOM.findDOMNode(
      this.refs.descriptionInput
    ).value.trim();
    const price = ReactDOM.findDOMNode(this.refs.priceInput).value.trim();

    Meteor.call('spaces.insert', name, description, price);

    // Clear form

    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
    ReactDOM.findDOMNode(this.refs.descriptionInput).value = '';
    ReactDOM.findDOMNode(this.refs.priceInput).value = '';
  }

  renderRenterSpaces() {
    var renterSpaces = this.props.spaces.filter(
      space => this.props.currentUser.username === space.username
    );
    return renterSpaces.map(space => <Space key={space._id} space={space} />);
  }

  renderSpaces() {
    var availableSpaces = this.props.spaces.filter(
      space => space.approved === false
    );
    return availableSpaces.map(space => (
      <Space key={space._id} space={space} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Makers Bnb</h1>
        </header>
        <AccountsUIWrapper />

        {this.props.currentUser ? (
          <form className="new-space" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="nameInput"
              placeholder="Property name"
              required
            />

            <input
              type="text"
              ref="descriptionInput"
              placeholder="Description"
              required
            />

            <input
              type="number"
              ref="priceInput"
              placeholder="Price per night(£)"
              required
            />
            <button>Submit</button>
          </form>
        ) : (
          ''
        )}

        <div className="split left">
          {this.props.currentUser ? (
            <ul>
              {' '}
              <h2> Your listings </h2>
              {this.renderRenterSpaces()}
            </ul>
          ) : (
            ''
          )}
        </div>
        <div className="split right">
          <ul>
            <h2> Spaces to rent </h2>
            {this.renderSpaces()}
          </ul>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('spaces');

  return {
    spaces: Spaces.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user()
  };
})(App);
