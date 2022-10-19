const BASE_URL = 'http://localhost:3001/';

export const getCrimeListApi = () => {
  return fetch(`${BASE_URL}crimes`);
}