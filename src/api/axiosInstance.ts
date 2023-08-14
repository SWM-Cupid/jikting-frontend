import axios, { InternalAxiosRequestConfig } from 'axios';

export const authenticated = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const unauthenticated = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const refreshAccessToken = async (originalRequest: InternalAxiosRequestConfig) => {
  const refreshToken = sessionStorage.getItem('rftk');
  originalRequest.headers['Authorization-refresh'] = `Bearer ${refreshToken}`;
  return await axios(originalRequest);
};

authenticated.interceptors.request.use((config) => {
  config.headers['Authorization'] = localStorage.getItem('actk');
  return config;
});

authenticated.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.data.code === 'C008') {
      const response = await refreshAccessToken(originalRequest);
      const newAccessToken = response.headers['authorization'];
      const newRefreshToken = response.headers['authorization-refresh'];
      localStorage.setItem('actk', `Bearer ${newAccessToken}`);
      sessionStorage.setItem('rftk', `Bearer ${newRefreshToken}`);
      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      delete originalRequest.headers['Authorization-refresh'];
      return axios(originalRequest);
    }

    if (error.response.data.code === 'C009') {
      alert('토큰이 모두 만료되었습니다..!');
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);
