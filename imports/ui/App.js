import React, { Component } from 'react';

import Space from './Space.js';

// App component - represents the whole app
export default class App extends Component {
  getSpaces() {
    return [
      { _id: 1, name: 'This is space 1' },
      { _id: 2, name: 'This is space 2' },
      { _id: 3, name: 'This is space 3' }
    ];
  }

  renderSpaces() {
    return this.getSpaces().map(space => (
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
