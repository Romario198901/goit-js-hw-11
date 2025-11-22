import { getImagesByQuery } from './js/pixabay-api';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

export const refs = {
  searchForm: document.querySelector('form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
};
refs.searchForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const query = formData.get('search-text');
  showLoader();
  getImagesByQuery(query)
    .then(images => {
      createGallery(images);
    })
    .catch(error => console.error(error))
    .finally(() => {
      hideLoader();
    });
  e.target.reset();
}
clearGallery();
