import config from 'config';
import http from './http-service';

/**
 * Service that gets all tags from the backend.
 *
 * @return {Promise} A promise returns array of tags as a response if resolved.
 */
export const getAllTags = () => http.get(`${config.apiEndpoint}tags`);

export default getAllTags;
