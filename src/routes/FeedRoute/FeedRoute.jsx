import React from 'react';

import Stories from '../../containers/Stories';
import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  return (
    <div data-testid="feed-route">
      <Stories />
      <Posts />
    </div>
  );
};

export default FeedRoute;
