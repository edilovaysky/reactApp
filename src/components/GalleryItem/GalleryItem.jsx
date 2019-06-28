import './GalleryItem.scss';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Likes } from '../Likes';
import { Comments } from '../Comments';
import { PicIcon } from '../PicIcon';
import { Modal } from '../Modal/Modal';
//import { VideoIcon } from '../VideoIcon';

export class GalleryItem extends Component {
  state = { imgId: '', isModalVisible: true };

  handleImgClick = event => {
    this.setState({
      imgId: this.props.id,
    });
    event.preventDefault();
    console.log(this.state.imgId);
  };

  handleModalClose = () => {
    console.log('Close!');
    this.setState({ isModalVisible: false });
    console.log(this.state);
  };

  render() {
    const { image, likes, comments } = this.props;
    //console.log(this.props);
    const { imgId, isModalVisible } = this.state;
    //console.log(imgId);
    return (
      <div className="gallery-item" onClick={this.handleImgClick} tabIndex="0">
        {imgId == '' || isModalVisible == false ? (
          <Fragment>
            <img src={image} className="gallery-image" alt="user picture" />
            <div className="gallery-item-info">
              <ul>
                <Likes likes={likes} />
                <Comments comments={comments} />
                {image.length > 1 && <PicIcon />}
                {/*   {video && <VideoIcon />} */}
              </ul>
            </div>
          </Fragment>
        ) : (
          <Modal onClose={this.handleModalClose}>
            <img src={image} className="gallery-image" alt="user picture" />
            <div className="gallery-item-info">
              <ul>
                <Likes likes={likes} />
                <Comments comments={comments} />
                {image.length > 1 && <PicIcon />}
                {/*   {video && <VideoIcon />} */}
              </ul>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
GalleryItem.propTypes = {
  image: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
};
