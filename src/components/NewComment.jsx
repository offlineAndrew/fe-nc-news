import { useState } from "react";
import * as api from "../utils/api";

export const NewComment = ({ article_id }) => {
  const [comment, setComment] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [newComments, setNewComments] = useState([]);

  const isSubmitted = () => {
    if (comment.length !== 0) {
      setMsg("");
      const newComment = {
        username: "grumpy19",
        body: comment
      };
      api
        .postComment(article_id, newComment)
        .then((postedComment) => {
          setMsg("Your comment has been posted");
          setComment("");
          setNewComments((prevComments) => [...prevComments, postedComment]);
        })
        .catch((err) => {
          setErrorMsg("Sorry, there was an issue posting your comment..");
        });
    }
  };

  return (
    <section>
      <textarea
        placeholder="Write your comment here.."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={isSubmitted}>Submit comment</button>
      <p>{errorMsg ? errorMsg : msg}</p>

      {newComments.map((newComment, index) => {
        return (
        <div key={index}>
          <p>{newComment.author}</p>
          <p>{newComment.body}</p>
        </div>
      )})}
    </section>
  );
};
