import React from 'react';
import styled from 'styled-components';

type Props = {
  item: string;
};

const StyledHeaderLink = styled.a`
  text-decoration: none;
  color: #000;
`;

const HeaderItem: React.FC<Props> = ({ item }) => {
  return (
    <li>
      <StyledHeaderLink href="/">{item}</StyledHeaderLink>
    </li>
  );
};

export default HeaderItem;
