import React from 'react';

import Post from '../../components/Post';

const Posts = () => (
  <div className="container" data-testid="posts">
    <section className="feed">
      <Post onlyPost={ true } />
      <Post onlyPost={ true } />
      <Post onlyPost={ true } />
    </section>
  </div>
);

export default Posts;
