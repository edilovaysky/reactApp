import './Profile.scss';

import React, { Component } from 'react';
import { profile } from '../userprofile';
import { ProfileImg } from '../ProfileImg';
import { ProfileSettings } from '../ProfileSettings';
import { ProfileStats } from '../ProfileStats';
import { ProfileBio } from '../ProfileBio';

export class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="profile">
          {profile.map((data, idx) => (
            <ProfileImg key={idx} {...data} />
          ))}
          {profile.map((data, idx) => (
            <ProfileSettings key={idx} {...data} />
          ))}
          {profile.map((data, idx) => (
            <ProfileStats key={idx} {...data} />
          ))}
          {profile.map((data, idx) => (
            <ProfileBio key={idx} {...data} />
          ))}
        </div>
      </div>
    );
  }
}
