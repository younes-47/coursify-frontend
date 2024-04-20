import axios from 'axios';
// const BASE_URL = 'https://localhost:7142/api/';
const BASE_URL = 'http://localhost:5041/api/';

// This axios instance is used with public routes (no interceptors nor cookies)
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// This axios instance is used with private routes (with interceptors no cookies)
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// This axios instance is used to set/send the refresh token (no interceptors but with cookies)
export const axiosCredentials = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default axiosPrivate;
