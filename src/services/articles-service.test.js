import http from './http-service';
import getArticles from './articles-service';

jest.mock('./http-service', () => ({
  get: jest.fn(),
}));

describe('Articles-Service', () => {
  it('should call http.get', async () => {
    await getArticles(0, 3);
    expect(http.get).toHaveBeenCalled();
  });
});
