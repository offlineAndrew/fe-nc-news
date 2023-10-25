import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <section className="comments">
      <h3>Comments</h3>
      <ul>
        {comments.map(({ author, body, created_at, votes, comment_id }) => (
          <li key={comment_id}>
            <p className="created-at"> {new Date(created_at).toLocaleDateString()}</p>
            <p>{author}</p>
            <p>{body}</p>
            <p>{votes}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
