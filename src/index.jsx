import 'assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Auth } from 'components/Auth';
import { GalleryContainer } from 'containers/GalleryContainer';
import { Profile } from 'components/Profile';
import { timingSafeEqual } from 'crypto';

class App extends Component {
  state = { token: localStorage.getItem('token'), id: '', image: '', name: '' };
  handleSuccess = token => {
    this.setState({ token }, () => {
      localStorage.setItem('token', token);
    });
  };

  handleUser = (_id, avatar, firstName) => {
    this.setState({ id: _id, image: avatar, name: firstName });
  };

  handleSignOut = event => {
    this.setState({ token: '' }, () => {
      localStorage.setItem('token', '');
    });
    event.preventDefault();
  };

  render() {
    const { token, id, image, name } = this.state;
    return (
      <div>
        {!token && (
          <Auth onSuccess={this.handleSuccess} handleUser={this.handleUser} />
        )}
        {token && <button onClick={this.handleSignOut}>Sign Out</button>}
        <header>
          {token && <Profile image={image} name={name} id={id} />}
        </header>
        <main>{token && <GalleryContainer token={token} />}</main>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
