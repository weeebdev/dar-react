import React from 'react';
import styled from 'styled-components';
import HeaderItem from './HeaderItem/HeaderItem';

const StyledHeaderItems = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
