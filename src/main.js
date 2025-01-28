import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.getElementById('search-form');
const loader = document.getElementById('loader');

form.addEventListener('submit', event => {
  event.preventDefault();
  const queryInput = document.getElementById('search-input');
  const query = queryInput.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  loader.style.display = 'block';

  fetchImages(query)
    .then(images => {
      renderImages(images);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});
