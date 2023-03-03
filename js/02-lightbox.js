import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const arrayImg = galleryItems
  .map(({ preview, original, description }) => {
    return `<li> 
    <a class="gallery__item" href="${original}" data-caption="${description}"  captionDelay="250">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
 </li>`;
  })
  .join("");

listEl.insertAdjacentHTML("afterbegin", arrayImg);


    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
	// do something…
});




