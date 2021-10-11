import http from './http-service';

const articlesEndPoint = 'http://localhost:3600/getArticles';

export default () => http.get(articlesEndPoint);
