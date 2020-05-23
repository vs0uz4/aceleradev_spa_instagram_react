import React from 'react';

import './UserProfile.scss';

const UserProfile = () => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <div className="user__thumb__wrapper">
                <img src="/imgs/avatar_1.jpg" alt="Avatar: Vitor Souza" />
              </div>
            </div>

            <p className="user__name">
              Vitor Souza
              <span>@vs0uz4</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
