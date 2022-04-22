import { galleryItems } from './gallery-items.js';


const galleryConteiner = document.querySelector('.gallery');
const ImagesCard = createImagesCard(galleryItems);
console.log(ImagesCard);

galleryConteiner.insertAdjacentHTML('beforeend', ImagesCard);

const gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

function createImagesCard(images) {
    return images.map(({ description, original, preview }) => {
      return `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src= ${preview}
        data-source= ${original}
        alt= ${description} 
      />
  </a>`
}).join('');
};
