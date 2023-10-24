import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://andrii-nc-news.onrender.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
};
