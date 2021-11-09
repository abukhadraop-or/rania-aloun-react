import config from 'config';
import http from './http-service';

/**
 * Service that logins a user through backend.
 *
 * @param {object} userData Object holding the user's to be registered data.
 * @return {Promise} Object of the login user if email is not already registered.
 */
const signUser = (userData) =>
  http.post(`${config.apiEndpoint}logins`, {
    email: userData.email,
    password: userData.password,
  });

export default signUser;
