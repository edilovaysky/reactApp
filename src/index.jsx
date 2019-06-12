import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Gallery } from './components/Gallery';
import { Profile } from './components/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Profile />
        </header>
        <main>
          <Gallery />
        </main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
