import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArticle } from "../utils/api";

export const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {article_id} = useParams()
  console.log(article_id);
  useEffect(() => {
    getArticle(article_id).then((fetchedArticle) => {
      setArticle(fetchedArticle);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      {isLoading ? 
        <p>Page is loading...</p>
       : 
        <>
          <h1>{article.title}</h1>
          <p>Topic: {article.topic}</p>
          <p>Author: {article.author}</p>
          <p>{article.body}</p>
          <p>Created at: {new Date(article.created_at).toLocaleDateString()}</p>
          <p>Votes: {article.votes}</p>
          <img src={article.article_img_url} alt="Article Image" />
        </>
      }
    </div>
  );
};

export default Article;
