import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  outlined: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  width: 120px;
  height: 30px;
  font-size: 0.875rem;

  background-color: ${({ outlined }) => (outlined ? 'none' : '#980bff')};
  color: ${({ outlined }) => (outlined ? '#980bff' : '#fff')};
  padding: 5px;

  border-radius: 10px;
  border: ${({ outlined }) => (outlined ? '#980bff' : 'none')};

  cursor: pointer;
`;

type Props = {
  title: string;
  outlined?: boolean;
};

const Button: React.FC<Props> = ({ title, outlined }) => {
  return <StyledButton outlined={!!outlined}>{title}</StyledButton>;
};

export default Button;
