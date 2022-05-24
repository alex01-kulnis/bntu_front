import axios from 'axios';
import { REACT_APP_API_URL } from '../utils/consts';

const $host = axios.create({
  baseURL: REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: REACT_APP_API_URL,
});

export { $host, $authHost };
