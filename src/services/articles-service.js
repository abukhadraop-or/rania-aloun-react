import config from 'config';
import http from './http-service';

/**
 * Service that gets all articles from the backend.
 *
 * @return {Promise} A promise returns array of articles as a response if resolved.
 */
const getAllArticles = (page, size) =>
  http.get(`${config.apiEndpoint}articles?page=${page}&size=${size}`);

export default getAllArticles;
