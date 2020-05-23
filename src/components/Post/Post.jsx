import React from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ onlyPost }) => {
  return (
    <article className="post" data-testid="post">
      {onlyPost === true && (
        <header className="post__header">
          <div className="user">
            <Link to="/users/vS0uz4" className="user__thumb">
              <div className="user__thumb__wrapper">
                <img src="/imgs/avatar_1.jpg" alt="Avatar: Vitor Souza" />
              </div>
            </Link>

            <Link to="/users/vS0uz4" className="user__name">Vitor Souza</Link>
          </div>

          <button className="post__context" >
            <span className="follow-btn">Seguir</span>
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src="/imgs/post_01.jpg" alt="Poster: Pizza Time" />
      </figure>

      {onlyPost === true && (
        <nav className="post__controls">
          <button className="post__control" >
            <i className="fas fa-heart" />
          </button>

          <div className="post__status">
            <div className="user">
              <span>Curtido por Fulano e outras pessoas.</span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
