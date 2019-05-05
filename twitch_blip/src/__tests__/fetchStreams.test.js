import { fetchStreams } from '../utils';

const getUrl = 'search/streams?query=Fifa&limit=20';
describe('fetchStreams function', () => {
    it('Should get fetchStreams', () => {
    expect(fetchStreams(getUrl)).toBeTruthy();
    });
});
