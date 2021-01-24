import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArticleList from '../../components/article-list/ArticleList';
import { getArticles } from '../../shared/api';
import { IArticle } from '../../shared/types';

const StyledArticlesPage = styled.div``;

const ArticlesPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    getArticles(categoryId)
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <StyledArticlesPage>
      <ArticleList articles={articles} />
    </StyledArticlesPage>
  );
};

export default ArticlesPage;
