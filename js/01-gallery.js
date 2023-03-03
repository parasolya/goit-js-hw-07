import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');


const arrayImg = galleryItems.map(({preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" rel="noopener noreferrer nofollow">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join('');

listEl.insertAdjacentHTML("afterbegin", arrayImg);


const handleChangerImg = (event) => {
  event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
      return;
  };
  
  const instance = basicLightbox.create(`  
      <img
        class="modal__image"
        src="${event.target.dataset.source}"      
        alt="${event.target.alt}" 
      />`
  )
  instance.show();

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape' && instance.visible()) {
      instance.close()
    }
  });

};

listEl.addEventListener('click', handleChangerImg);

