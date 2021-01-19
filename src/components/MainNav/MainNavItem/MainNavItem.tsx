import React from 'react';
import styled from 'styled-components';
import { CategoryType } from '../../../shared/types';

const StyledMainNavItemLink = styled.a`
  -webkit-text-decoration: none;
  text-decoration: none;

  color: #fff;
  font-weight: 600;
`;

const MainNavItem: React.FC<CategoryType> = ({ title }) => {
  return (
    <li>
      <StyledMainNavItemLink href="/">{title}</StyledMainNavItemLink>
    </li>
  );
};

export default MainNavItem;
