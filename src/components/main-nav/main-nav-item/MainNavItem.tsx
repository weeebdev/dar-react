import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICategory } from '../../../shared/types';

export const StyledMainNavItemLink = styled(Link)`
  -webkit-text-decoration: none;
  text-decoration: none;

  color: #fff;
  font-weight: 600;
`;

const MainNavItem: React.FC<ICategory> = ({ id, title }) => {
  return (
    <li>
      <StyledMainNavItemLink to={`/articles/${id}`}>{title}</StyledMainNavItemLink>
    </li>
  );
};

export default MainNavItem;
