import axios from 'axios';

const authKey = 'BWD1WACOr6mILOITkVqT4I4RL78jkDlyjZpkrlz2UYE';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${authKey}`,
  },
});
