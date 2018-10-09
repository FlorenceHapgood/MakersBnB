import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Spaces } from '../api/spaces.js';
import Space from './Space.js';

// App component - represents the whole app
class App extends Component {

  renderSpaces() {
    return this.props.spaces.map((space) => (
      <Space key={space._id} space={space} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Spaces</h1>
        </header>

        <ul>{this.renderSpaces()}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    spaces: Spaces.find({}).fetch(),
  };
})(App);
