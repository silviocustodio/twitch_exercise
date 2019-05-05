import { getStream } from '../utils';

const getStreamId = '33997690000'

describe('getStream function', () => {
    it('Should get getStream', () => {
    expect(getStream(getStreamId)).toBeTruthy();
    });
});