import config from 'config.json';
import http from './http-service';

/**
 * Service that gets all articles from the backend.
 *
 * @return {Promise} A promise returns array of articles as a response if resolved.
 */
export const getAllArticles = (page, size) =>
  http.get(`${config.apiEndpoint}getArticles?page=${page}&size=${size}`);

export default getAllArticles;
