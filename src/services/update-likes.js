import config from 'config';
import http from './http-service';

/**
 * Service that updates article likes count.
 *
 * @param {number} articleId Id of liked article.
 * @param {number} updatedCount New likes count of article.
 *
 * @return {Promise} A promise.
 */
export default (articleId, updatedCount) =>
  http.put(`${config.apiEndpoint}articles/${articleId}`, {
    passed: updatedCount,
  });
