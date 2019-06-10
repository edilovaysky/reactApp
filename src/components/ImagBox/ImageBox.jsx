import './ImageBox.scss';

import React, { Component } from 'react';

import { Likes } from '../Likes';
import { Comments } from '../Comments';
import { PicIcon } from '../PicIcon';
import PropTypes from 'prop-types';

export class ImageBox extends Component {
  render() {
    const { image, likes, comments, picIcon } = this.props;
    return (
      <div className="gallery-item" tabIndex="0">
        <img src={image} className="gallery-image" alt="" />
        <div className="gallery-item-info">
          <ul>
            <Likes likes={likes} />
            <Comments comments={comments} />
            <PicIcon picIcon={picIcon} />
          </ul>
        </div>
      </div>
    );
  }
}
ImageBox.propTypes = {
  image: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
};
