import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = () => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      <Post onlyPost={ false } />
      <Post onlyPost={ false } />
      <Post onlyPost={ false } />
    </section>
  </div>
);

export default UserPosts;
