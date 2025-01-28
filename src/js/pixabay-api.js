const API_KEY = '48447542-64438fdfaeeaa1a5314542701';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      return [];
    });
};
