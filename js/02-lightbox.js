import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const arrayImg = galleryItems
  .map(({ preview, original, description }) => {
    return `<li> 
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
 </li>`;
  })
  .join("");

listEl.insertAdjacentHTML("afterbegin", arrayImg);

let gallery = new SimpleLightbox(".gallery a", {
  captionData: 'alt',
  captionDelay: 250,
});
