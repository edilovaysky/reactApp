import './Gallery.scss';

import React, { Component } from 'react';

import { ImageBox } from '../ImagBox';
import { pictures } from '../pictures';

export class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        {pictures.map((picture, idx) => (
          <ImageBox key={idx} {...picture} />
        ))}
      </div>
    );
  }
}
