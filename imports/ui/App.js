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
    const description = ReactDOM.findDOMNode(this.refs.descriptionInput).value.trim();
    const price = ReactDOM.findDOMNode(this.refs.priceInput).value.trim();

    Meteor.call('spaces.insert', name, description, price);


    // Clear form
    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
    ReactDOM.findDOMNode(this.refs.descriptionInput).value = '';
    ReactDOM.findDOMNode(this.refs.priceInput).value = '';

  }

  renderSpaces() {
    return this.props.spaces.map(space => (
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

        { this.props.currentUser ?
        <form className="new-space" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="nameInput"
            placeholder="Type to add new name"
          />

          <input
            type="text"
            ref="descriptionInput"
            placeholder="Type to add description"
          />

          <input
            type="text"
            ref="priceInput"
            placeholder="Type to add new price"
          />
          <button>Submit</button>
        </form> : ''
      }
        <ul>{this.renderSpaces()}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    spaces: Spaces.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
