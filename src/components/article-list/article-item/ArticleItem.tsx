import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IArticle } from '../../../shared/types';

const StyledArticle = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: space-between;
  border-radius: 15px;

  &:hover {
    box-shadow: 5px 5px 5px #aaaaaa;
    transition: 0.5s;
    transform: translateX(5px);
    cursor: pointer;
  }
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
  object-fit: cover;

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

const Article: React.FC<IArticle> = ({ id, title, annotation, created_at, image }) => {
  const date = new Date(created_at);

  return (
    <Link to={`article/${id}`}>
      <StyledArticle>
        <StyledArticleDescription>
          <StyledArticleTitle>{title}</StyledArticleTitle>
          <StyledArticleAnnotation>{annotation}</StyledArticleAnnotation>

          <StyledArticleDate>{`${date.getDay()} ${date.toLocaleString('default', {
            month: 'long',
          })}`}</StyledArticleDate>
        </StyledArticleDescription>
        <StyledArticleImage src={`https://dev-darmedia-uploads.s3.eu-west-1.amazonaws.com/${image}`} />
      </StyledArticle>
    </Link>
  );
};

export default Article;
