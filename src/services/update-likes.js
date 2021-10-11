import http from './http-service';

const updateLikesEndPoint = 'http://localhost:3600/updateArticleLikes';

export default (articleId, updatedCount) =>
  http.put(`${updateLikesEndPoint}/${articleId}`, {
    passed: updatedCount,
  });
