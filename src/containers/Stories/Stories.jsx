import React from "react";

import './Stories.scss';

const Stories = () => {
  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          <button key="1" className="user__thumb user__thumb--hasNew" >
            <div className="user__thumb__wrapper">
              <img src="/imgs/avatar_1.jpg" alt="Avatar: Vitor Souza" />
            </div>
          </button>
          <button key="2" className="user__thumb" >
            <div className="user__thumb__wrapper">
              <img src="/imgs/avatar_2.jpg" alt="Avatar: T'Chala" />
            </div>
          </button>
          <button key="3" className="user__thumb user__thumb--hasNew" >
            <div className="user__thumb__wrapper">
              <img src="/imgs/avatar_3.jpg" alt="Avatar: Bruce Wayne" />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};
export default Stories;
