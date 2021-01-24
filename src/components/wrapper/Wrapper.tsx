import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 90%;
`;

const Wrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
