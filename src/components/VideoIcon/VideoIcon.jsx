import './VideoIcon.scss';

import React, { Component } from 'react';

export class VideoIcon extends Component {
  render() {
    const { videoIcon } = this.props;
    return (
      <div class="gallery-item-type">
        <span class="visually-hidden">Video</span>
        <i class="fas fa-video" aria-hidden="true" />
      </div>
    );
  }
}
