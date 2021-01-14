import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  font-size: 0.875rem;

  background-color: #980bff;
  color: #fff;
  padding: 5px;

  border-radius: 10px;
  border: none;
`;

type Props = {
  title: string;
};

const Button: React.FC<Props> = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;
