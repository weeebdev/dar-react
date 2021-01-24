import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  outlined?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  color: ${(props) => (props.outlined ? '#7400b1' : '#fff')};
  background: ${(props) => (props.outlined ? 'none' : '#7400b1')};
  padding: 0.8rem 1.2rem;
  font-size: 16px;
  border: ${(props) => (props.outlined ? '1px solid #7400b1' : '1px solid #fff')};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;
const SecondaryStyledButton = styled(StyledButton)`
  color: ${(props) => (props.outlined ? '#ff01ff' : '#fff')};
  background: ${(props) => (props.outlined ? 'none' : '#ff01ff')};
  border: ${(props) => (props.outlined ? '1px solid #ff01ff' : '1px solid #fff')};
`;
const GhostStyledButton = styled(StyledButton)`
  color: #000;
  border: 1px solid #000;
  background: none;

  &:hover {
    color: #fff;
    background: #000;
  }
`;

type Props = {
  title: string;
  outlined?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  onClick?: () => void;
};

const getStyledButton = (variant: 'primary' | 'secondary' | 'ghost') => {
  switch (variant) {
    case 'primary':
      return StyledButton;
    case 'secondary':
      return SecondaryStyledButton;
    case 'ghost':
      return GhostStyledButton;
    default:
      return StyledButton;
  }
};

const Button: React.FC<Props> = ({ title, variant, outlined, disabled, onClick }) => {
  const Styled = getStyledButton(variant || 'primary');
  return (
    <Styled outlined={outlined || disabled} onClick={onClick} disabled={disabled}>
      {title}
    </Styled>
  );
};

export default Button;
