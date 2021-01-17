import React from 'react';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';

const StyledEmojiButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  transition: 1s;

  &:hover {
    transform: rotate(20deg);
  }
`;

const StyledEmoji = styled(Emoji)`
  font-size: 40px;
`;

type Props = {
  onClick: () => void;
  symbol: string;
  label?: string;
};

const EmojiButton: React.FC<Props> = ({ onClick, symbol, label }) => {
  return (
    <StyledEmojiButton onClick={onClick}>
      <StyledEmoji symbol={symbol} label={label} />
    </StyledEmojiButton>
  );
};

export default EmojiButton;
