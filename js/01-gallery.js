import { galleryItems } from '/gallery-items.js';


const galleryConteiner = document.querySelector('.gallery');
const ImagesCard = createImagesCard(galleryItems);


galleryConteiner.insertAdjacentHTML('beforeend', ImagesCard);

galleryConteiner.addEventListener('click', onGalleryConteinerClick)


function createImagesCard(images) {
    return images.map(({ description, original, preview }) => {
      return`<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src= ${preview}
          data-source= ${original}
          alt= ${description}
        />
      </a>
    </div>`
}).join('');
};


function onGalleryConteinerClick(event) {
    event.preventDefault();
    const isGalleryImageEl = event.target.classList.contains('gallery__image');
    if (!isGalleryImageEl){
        return;
    }
  
  const imagaEl = event.target.dataset.source;
  
    const modal = basicLightbox.create(`<img src="${imagaEl}">`, {
    onShow: () => {
      window.addEventListener('keydown',onKeyPress);
    },
    onClose:()=>{
      window.addEventListener('keydown', onKeyPress)
    }
  })

  function onKeyPress(e) {
    
    if (e.code === 'Escape') {
      modal.close();
    }
  }
  modal.show();
};    



