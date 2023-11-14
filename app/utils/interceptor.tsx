import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  // Add any default headers if needed
});

api.interceptors.request.use(
    (config) => {
      // Check if the user is authenticated
      const isAuthenticated: any = JSON.stringify(localStorage.getItem('session'));
      console.log(isAuthenticated);

  
      // If the user is not authenticated, redirect to the login page
      if (!isAuthenticated) {
        window.location.href = '/login';
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
  });

export default api;