import React from 'react';

import User from '../../components/User';

import './UsersList.scss';

const UersList = () => {
  return (
    <section className="users-list" data-testid="users-list">
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </section>
  )
};

export default UersList;
