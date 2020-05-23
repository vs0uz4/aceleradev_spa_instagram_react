import React from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = () => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to="/users/vS0uz4" className="user__thumb">
              <img src="/imgs/avatar_1.jpg" alt="Avatar: Vitor Souza" />
            </Link>

            <Link to="/users/vS0uz4" className="user__name">Vitor Souza</Link>
          </div>

          <button className="story__close">
            <i className="fas fa-times" />
          </button>
        </header>

        <div className="story__progress">
          <div className="story__progress__elapsed" />
        </div>
      </div>

      <div className="container">
        <section className="story__video__wrapper">
          <video autoPlay loop playsInline className="video-player" src="" />
        </section>
      </div>
    </section>
  );
};

export default Story;
