import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export const renderImages = images => {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  const imageElements = images
    .map(image => {
      return `  
            <a href="${image.largeImageURL}" class="gallery__item">  
                <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__image" />  
                <div class="gallery__info">  
                    <div class="gallery-info-item">
                    <p class="info-item-title">Likes</p>
                    <p>${image.likes}</p>
                    </div>
                    <div class="gallery-info-item">
                      <p class="info-item-title">Views</p>
                      <p>${image.views}</p>
                    </div>
                    <div class="gallery-info-item">
                      <p class="info-item-title">Comments</p>
                      <p>${image.comments}</p>
                    </div>
                    <div class="gallery-info-item">
                      <p class="info-item-title">Downloads</p>
                      <p>${image.downloads}</p>
                    </div>
                </div>  
            </a>`;
    })
    .join('');

  gallery.innerHTML = imageElements;

  lightbox = new SimpleLightbox('.gallery__item', {});
  lightbox.refresh();
};
