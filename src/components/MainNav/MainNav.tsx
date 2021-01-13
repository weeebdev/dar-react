import React from 'react';
import logo from '../../logo.svg';

import './MainNav.scss';

const MainNav = () => {
  return (
    <div className="MainNav">
      <nav className="MainNav__nav">
        <ul className="MainNav__ul">
          <li className="MainNav__li">
            <a href="#" className="MainNav__a">
              Навыки
            </a>
          </li>
          <li className="MainNav__li">
            <a href="#" className="MainNav__a">
              Знания
            </a>
          </li>
          <li className="MainNav__li">
            <a href="#" className="MainNav__a">
              Карьера
            </a>
          </li>
          <li className="MainNav__li">
            <a href="#" className="MainNav__a">
              Технологии
            </a>
          </li>
          <li className="MainNav__li">
            <a href="#" className="MainNav__a">
              Идеи
            </a>
          </li>
          <li className="MainNav__li">
            <a href="#" className="MainNav__a">
              События
            </a>
          </li>
          <li className="MainNav__li">
            <a href="#" className="MainNav__a">
              <img src={logo} alt="" className="MainNav__logo" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
