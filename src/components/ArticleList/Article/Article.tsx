import React from 'react';
import styled from 'styled-components';
import { ArticleType } from '../../../shared/types';

const StyledArticle = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: space-between;
`;

const StyledArticleDescription = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledArticleImage = styled.img`
  width: 30%;
  height: 100%;

  border-radius: 15px;
`;

const StyledArticleTitle = styled.h2`
  max-width: 80%;
  font-size: 20px;
  font-weight: 600;
  color: #5a067e;
`;

const StyledArticleAnnotation = styled.p`
  font-size: 16px;
  color: #707175;
`;

const StyledArticleDate = styled.p`
  font-size: 13px;
`;

const Article: React.FC<ArticleType> = ({ title, annotation, created_at }) => {
  const date = new Date(created_at);

  return (
    <StyledArticle>
      <StyledArticleDescription>
        <StyledArticleTitle>{title}</StyledArticleTitle>
        <StyledArticleAnnotation>{annotation}</StyledArticleAnnotation>

        <StyledArticleDate>{`${date.getDay()} ${date.toLocaleString('default', { month: 'long' })}`}</StyledArticleDate>
      </StyledArticleDescription>
      <StyledArticleImage src={'https://picsum.photos/1000'} />
    </StyledArticle>
  );
};

export default Article;
