import config from 'config.json';
import http from './http-service';

/**
 * Service that updates article likes count.
 *
 * @return {Promise} A promise.
 */
export default (articleId, updatedCount) =>
  http.put(`${config.apiEndpoint}articles/${articleId}`, {
    passed: updatedCount,
  });
