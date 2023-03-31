import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const arrayImg = galleryItems
  .map(({ preview, original, description }) => {
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
  })
  .join("");

listEl.insertAdjacentHTML("afterbegin", arrayImg);

const handleChangerImg = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const handleUseKey = (event) => {
    if (event.key == "Escape" && instance.visible()) {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `  
      <img
        class="modal__image"
        src="${event.target.dataset.source}"      
        alt="${event.target.alt}" 
      />`,
    {
      onShow: (instance) => document.addEventListener("keydown", handleUseKey),
      onClose: (instance) => {
        document.removeEventListener("keydown", handleUseKey);
        listEl.removeEventListener("click", handleChangerImg);
      },
    }
  );

  instance.show((instance) => {
    console.log("finished Show()", instance);
  });
};

listEl.addEventListener("click", handleChangerImg);
