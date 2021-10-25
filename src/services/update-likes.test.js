import updateLikesService from 'services/update-likes';
import http from './http-service';

jest.mock('./http-service', () => ({
  put: jest.fn(),
}));

describe('Articles-Service', () => {
  it('should call http.get', async () => {
    await updateLikesService(1, 15);
    expect(http.put).toHaveBeenCalled();
  });
});
