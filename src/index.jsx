import 'assets/global.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { Auth } from 'components/Auth';
import { GalleryContainer } from 'containers/GalleryContainer';
import { Profile } from 'components/Profile';
import { Modal } from 'components/Modal';

class App extends Component {
  state = {
    token: localStorage.getItem('token'),
    id: '',
    image: '',
    name: '',
    isModalVisible: false,
  };

  handleToggleClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

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
      localStorage.setItem('token', null);
    });
    event.preventDefault();
  };

  handleModalClose = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    const { token, id, image, name, isModalVisible } = this.state;
    return (
      <Fragment>
        {!token && (
          <Auth onSuccess={this.handleSuccess} handleUser={this.handleUser} />
        )}
        {token && <button onClick={this.handleSignOut}>Sign Out</button>}
        <header>
          {token && <Profile image={image} name={name} id={id} />}
        </header>
        <main>{token && <GalleryContainer token={token} />}</main>
        {isModalVisible && (
          <Modal onClose={this.handleModalClose} title="Hi! I'm modal">
            <div>
              <p>
                A circular color picker component also named color-wheel
                performed with react and pure svg. Mobile compatible.
              </p>
            </div>
          </Modal>
        )}
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
