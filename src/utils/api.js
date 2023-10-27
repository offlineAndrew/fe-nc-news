import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://andrii-nc-news.onrender.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticle = (article_id) => {
  return axios
    .get(`https://andrii-nc-news.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    });
};

export const getComments = (article_id) => {
  return axios
    .get(
      `https://andrii-nc-news.onrender.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      return res.data;
    });
};

export const updateVotes = (article_id, value) => {
  return axios
    .patch(`https://andrii-nc-news.onrender.com/api/articles/${article_id}`, {
      inc_votes: value,
    })
    .then((res) => {
      return res.data.value;
    });
};
