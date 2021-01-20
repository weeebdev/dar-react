import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getArticles } from '../../shared/api';
import { ArticleType } from '../../shared/types';
import Article from './Article/Article';

const StyledArticleList = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: #f6f6f6; */

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

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      getArticles()
        .then((res) => setArticles(res.data))
        .catch((err) => console.error(err));
    };

    fetchData();
  }, []);

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
