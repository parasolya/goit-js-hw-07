import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const arrayImg = galleryItems
  .map(({ preview, original, description }) => {
    return ` 
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
  })
  .join("");

listEl.insertAdjacentHTML("afterbegin", arrayImg);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,  
});
