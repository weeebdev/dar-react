import React from 'react';
import styled from 'styled-components';
import { IArticle } from '../../shared/types';
import Article from './article-item/ArticleItem';

const StyledArticleList = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    margin-top: 20px;
  }
`;

const StyledArticleListTitle = styled.h1`
  font-size: 2.1875rem;
  font-weight: 600;
  background: -webkit-linear-gradient(#e51aff, #a513fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

type Props = {
  articles: IArticle[];
};

const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <StyledArticleList>
      <StyledArticleListTitle>Актуальное</StyledArticleListTitle>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
