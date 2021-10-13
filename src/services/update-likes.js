import config from 'config.json';
import http from './http-service';

const updateLikesEndPoint = `${config.apiEndpoint}updateArticleLikes`;

export default (articleId, updatedCount) =>
  http.put(`${updateLikesEndPoint}/${articleId}`, {
    passed: updatedCount,
  });
