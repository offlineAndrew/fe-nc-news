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
}
