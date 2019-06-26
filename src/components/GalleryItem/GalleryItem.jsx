import './GalleryItem.scss';

import React, { Component } from 'react';

import { Likes } from '../Likes';
import { Comments } from '../Comments';
import { PicIcon } from '../PicIcon';
//import { VideoIcon } from '../VideoIcon';
import PropTypes from 'prop-types';

export class GalleryItem extends Component {
  render() {
    const { image, likes, comments } = this.props;
    return (
      <div className="gallery-item" tabIndex="0">
        <img src={image} className="gallery-image" alt="" />
        <div className="gallery-item-info">
          <ul>
            <Likes likes={likes} />
            <Comments comments={comments} />
            {image.length > 1 && <PicIcon />}
            {/*   {video && <VideoIcon />} */}
          </ul>
        </div>
      </div>
    );
  }
}
GalleryItem.propTypes = {
  image: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
};
