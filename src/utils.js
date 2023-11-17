import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://local:5000/api/tasks',
});

export default customFetch;
