import React from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

const ProfileRoute = () => {
  return (
    <div data-testid="profile-route">
      <UserProfile />
      <UserPosts />
    </div>
  );
};

export default ProfileRoute;
