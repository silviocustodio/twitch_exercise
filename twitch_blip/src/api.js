import axios from 'axios';

// Request instance to Twitch API
export default axios.create({
  baseURL: 'https://api.twitch.tv/kraken/',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': process.env.REACT_APP_CLIENT_ID
  }
});
