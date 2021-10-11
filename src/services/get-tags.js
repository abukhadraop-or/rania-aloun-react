import http from './http-service';

const tagsEndPoint = 'http://localhost:3600/getTags';

export default () => http.get(tagsEndPoint);
