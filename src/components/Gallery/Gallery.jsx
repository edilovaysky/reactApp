import './Gallery.scss';

import React, { Component } from 'react';

import { ImageBox } from '../ImageBox';
import { pictures } from '../pictures';

export class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <div className="gallery">
          {pictures.map((picture, idx) => (
            <ImageBox key={idx} {...picture} />
          ))}
        </div>
      </div>
    );
  }
}
