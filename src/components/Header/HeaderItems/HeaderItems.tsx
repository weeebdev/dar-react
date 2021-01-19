import React from 'react';
import styled from 'styled-components';
import HeaderItem from './HeaderItem/HeaderItem';

const StyledHeaderItems = styled.ul`
  display: flex;
  justify-content: space-between;

  list-style: none;
`;

type Props = {
  items: string[];
};

const HeaderItems: React.FC<Props> = ({ items }) => {
  return (
    <StyledHeaderItems>
      {items.map((item, index) => (
        <HeaderItem item={item} key={index} />
      ))}
    </StyledHeaderItems>
  );
};

export default HeaderItems;
