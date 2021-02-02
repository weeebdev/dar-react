import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentForm from '../../components/comment-form/CommentForm';
import { fetchArticle } from '../../shared/redux/article/article.actions';
import { selectArticle } from '../../shared/redux/article/article.selectors';

const StyledArticlePage = styled.div``;

const StyledArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 0;
  width: 100%;
  height: 182px;
`;

const StyledArticleTitle = styled.div`
  line-height: 150%;
  margin: 0;
  color: #58007b;
  width: 80%;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StyledArticleAnnotation = styled.div`
  color: #737373;
  line-height: 150% !important;
`;

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const dispatch = useDispatch();
  const article = useSelector(selectArticle);

  useEffect(() => {
    if (articleId) {
      dispatch(fetchArticle(articleId));
    }
  }, [articleId, dispatch]);

  return (
    <StyledArticlePage>
      {article && (
        <StyledArticleContent>
          <StyledArticleTitle>{article.title}</StyledArticleTitle>
          <StyledArticleAnnotation dangerouslySetInnerHTML={{ __html: article.description }}></StyledArticleAnnotation>
          <CommentForm />
        </StyledArticleContent>
      )}
    </StyledArticlePage>
  );
};

export default ArticlePage;
