import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArticleList from '../../components/article-list/ArticleList';
import { fetchArticles } from '../../shared/redux/articles/articles.actions';
import { selectArticles } from '../../shared/redux/articles/articles.selectors';

const StyledArticlesPage = styled.div``;

const ArticlesPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchArticles(categoryId));
  }, [categoryId, dispatch]);

  return (
    <StyledArticlesPage>
      <ArticleList articles={articles} />
    </StyledArticlesPage>
  );
};

export default ArticlesPage;
