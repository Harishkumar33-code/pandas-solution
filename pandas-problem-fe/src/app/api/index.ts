import axios from 'axios';
import axiosRetry from 'axios-retry';

const retryableStatusCodes = [408, 425, 429, 502, 503, 504];
type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
};

axiosRetry(axios, {
  retries: 2,
  retryCondition: (error: any) =>
    retryableStatusCodes.includes(error?.response?.status),
  retryDelay: retryCount => retryCount * 100,
});

function apiClient() {
  const baseUrl = 'http://localhost:3001/api/';

  async function get(endpoint: string, { headers = {} }: RequestOptions = {}) {
    const url = `${baseUrl}${endpoint}`;

    try {
      const response = await axios.get(url, {
        headers: { 'Content-Type': 'application/json', ...headers },
        timeout: 10000,
      });
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  async function post(
    endpoint: string,
    body: any,
    { headers = {} }: RequestOptions = {},
  ) {
    const url = `${baseUrl}${endpoint}`;

    try {
      const response = await axios.post(url, body, {
        headers: { 'Content-Type': 'application/json', ...headers },
        timeout: 10000,
      });
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  return { get, post };
}

export default apiClient;