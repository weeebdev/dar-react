import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getArticles } from '../../shared/api';
import { ArticleType } from '../../shared/types';
import Article from './Article/Article';

const StyledArticleList = styled.div`
  width: 40vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      <h1>Актуальное</h1>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
