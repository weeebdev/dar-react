import React from 'react';
import logo from '../../logo.svg';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Header">
      <header>
        <img src={logo} alt="Logo image" className="Header__logo" />
        <nav className="Header__nav">
          <ul className="Header__ul">
            <li className="Header__li">
              <a href="" className="Header__a">
                О нас
              </a>
            </li>
            <li className="Header__li">
              <a href="" className="Header__a">
                Обучение
              </a>
            </li>
            <li className="Header__li">
              <a href="" className="Header__a">
                Сообщество
              </a>
            </li>
            <li className="Header__li">
              <a href="" className="Header__a">
                Медиа
              </a>
            </li>
          </ul>
        </nav>
        <button className="Header__button">Войти</button>
      </header>
    </div>
  );
};

export default Header;
