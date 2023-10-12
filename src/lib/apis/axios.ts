import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const apiWithInstance = (baseURL: string) => {
  const api = axios.create({
    baseURL,
  });

  const token = `${process.env.COUNTRY_API_TOKEN}`;

  const [token_type, access_token]: string[] = token.split(' ');

  api.interceptors.request.use(
    async (config) => {
      if (token) {
        config.headers['content-type'] = 'application/json';
        config.headers.Authorization = `${token_type} ${access_token}`;
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  return api;
};
