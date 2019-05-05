import api from './api';

// Gets a list of live streams with query and maximum number of objects to return
export function fetchStreams(query, limit) {
  return api.get(`search/streams?query=${query}&limit=${limit}`);
}

// Gets stream information (the stream object) for a specified user.
export function getStream(channelId) {
  return api.get(`streams/${channelId}`);
}
