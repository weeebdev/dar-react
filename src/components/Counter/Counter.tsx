import React, { useState } from 'react';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';
import EmojiButton from './EmojiButton/EmojiButton';

const StyledCounter = styled.div`
  width: 50vw;
  height: 25vh;

  margin: auto;
  margin-top: 10px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: #d1cdcd;
  border-radius: 25px;
`;

const StyledLikesWrapper = styled.div`
  width: 30%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledHeartEmoji = styled(Emoji)`
  font-size: 70px;
`;

const StyledHeartCounter = styled.p`
  font-size: 30px;
`;

const Counter: React.FC = () => {
  const [likes, setLikes] = useState(0);

  const putLike = () => {
    setLikes(likes + 1);
  };

  const putDislike = () => {
    setLikes(likes ? likes - 1 : likes);
  };

  return (
    <StyledCounter>
      <EmojiButton symbol={'👎🏻'} onClick={putDislike} />
      <StyledLikesWrapper>
        <StyledHeartEmoji symbol={'❤️'} />
        <StyledHeartCounter>{likes}</StyledHeartCounter>
      </StyledLikesWrapper>
      <EmojiButton symbol={'👍🏻'} onClick={putLike} />
    </StyledCounter>
  );
};

export default Counter;
