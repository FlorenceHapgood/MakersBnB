import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Spaces } from '../api/spaces.js';
import Space from './Space.js';

// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Find the name field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();

    Spaces.insert({
      name,
      createdAt: new Date() // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
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
          <h1>Spaces</h1>
        </header>
        <form className="new-name" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="nameInput"
            placeholder="Type to add new name"
          />
        </form>
        <ul>{this.renderSpaces()}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    spaces: Spaces.find({}, { sort: { createdAt: -1 } }).fetch()
  };
})(App);
