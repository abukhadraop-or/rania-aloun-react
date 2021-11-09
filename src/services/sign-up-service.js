import config from 'config';
import http from './http-service';

/**
 * Service that registers a user to the database through backend.
 *
 * @param {object} userData Object holding the user's to be registered data.
 * @return {Promise} Object of the registered user if email is not already registered.
 */
const registerUser = (userData) =>
  http.post(`${config.apiEndpoint}users`, {
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });

export default registerUser;
