import React from 'react';
import { Link } from 'react-router-dom';

import './User.scss';

const User = ()  => {
  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to="/users/vs0uz4" className="user">
          <div className="user__thumb">
            <div className="user__thumb__wrapper">
              <img src="/imgs/avatar_1.jpg" alt="Avatar: Vitor Souza" />
            </div>
          </div>

          <div className="user__name">Vitor Souza</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
