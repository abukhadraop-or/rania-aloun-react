import getAllTags from 'services/tags-service';
import http from './http-service';

jest.mock('./http-service', () => ({
  get: jest.fn(),
}));

describe('Articles-Service', () => {
  it('should call http.get', async () => {
    await getAllTags();
    expect(http.get).toHaveBeenCalled();
  });
});
