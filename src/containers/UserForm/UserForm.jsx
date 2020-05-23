import React from 'react';

import './UserForm.scss';

const UserForm = () => {
  return (
    <>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <div className="user__thumb__wrapper">
                  <img src="/imgs/avatar_1.jpg" alt="Avatar: Fulano da Silva" />
                </div>
              </div>

              <p className="user__name">
                Fulano da Silva
                <span>@fulano</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Fulano da Silva"
            />

            <label>Usuário</label>
            <input
              type="text"
              placeholder="Ex: fulano"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Ex: fulano@provedor.com"
            />

            <label>Url da Imagem de Perfil</label>
            <input
              type="text"
              placeholder="http://..."
            />

            <button type="button" >
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserForm;
