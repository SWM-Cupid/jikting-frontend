import axios from 'axios';

export const authenticated = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const unauthenticated = axios.create({
  // baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
