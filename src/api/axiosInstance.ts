import axios from 'axios';

// export const authenticated = axios.create({
//   baseURL: '/auth',
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// });

export const unauthenticated = axios.create({
  // baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
