import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
const API_URL = 'https://api.thedogapi.com/v1';

export function getDog(limit = 10, breedIds = '') {
  return axios.get(`${API_URL}/images/search?limit=${limit}&breed_ids=${breedIds}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });
}

export function getDogBreeds(limit = 6) {
  return axios.get(`${API_URL}/breeds?limit=${limit}&page=0`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });
}
