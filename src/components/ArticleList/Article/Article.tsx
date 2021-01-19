import React from 'react';
import styled from 'styled-components';
import { ArticleType } from '../../../shared/types';

const StyledArticle = styled.div``;

const Article: React.FC<ArticleType> = ({ title, annotation, created_at }) => {
  const date = new Date(created_at);

  return (
    <StyledArticle>
      <h2>{title}</h2>
      <div>{annotation}</div>

      <p>{`${date.getDay()} ${date.toLocaleString('default', { month: 'long' })}`}</p>
    </StyledArticle>
  );
};

export default Article;
