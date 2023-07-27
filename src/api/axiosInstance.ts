import axios from 'axios';

const BASE_URL = 'http://jikting.com:8080';

// export const authenticated = axios.create({
//   baseURL: '/auth',
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// });

export const unauthenticated = axios.create({
  // baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
