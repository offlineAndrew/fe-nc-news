import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { Link } from 'react-router-dom';


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Page is loading...</p>;
  }

  return (
    <div className="articles">
      <h2>Articles List</h2>
      <ul>
        {articles.map(
          ({
            article_id,
            title,
            author,
            topic,
            article_img_url,
            created_at,
            comment_count,
          }) => (
            <li key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h3>{title}</h3>
              </Link>
              <div className="atributes">
                <p className="author">{author}</p>
                <p className="topic">{topic}</p>
              </div>
              <img src={article_img_url} alt="article image" />

              <p className="comment-count">{comment_count} comments</p>
              <p className="created-at">
                {new Date(created_at).toLocaleDateString()}
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Articles;
