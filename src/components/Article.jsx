import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArticle } from "../utils/api";
import { Comments } from "../components/Comments"


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
    <div className="single-article">
      {isLoading ? 
        <p>Page is loading...</p>
       : 
        <>
          <h1>{article.title}</h1>
          <div className="atributes">
            <p className="topic"> {article.topic}</p>
            <p className="author">{article.author}</p>
          </div>
          <p>{article.body}</p>
          <div className="atributes">
          <p className="created-at">{new Date(article.created_at).toLocaleDateString()}</p>
          <p>Votes: {article.votes}</p>
          </div>
          <img src={article.article_img_url} alt="Article Image" />
          <Comments />
        </>
      }
    </div>
  );
};

