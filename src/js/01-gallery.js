import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const galeryContainer = document.querySelector('.gallery');
const GaleryItems = createGaleryItems(galleryItems);
const galleryLink = document.querySelector(".gallery__link");
const galleryImg = document.querySelector(".gallery__image");

galeryContainer.insertAdjacentHTML('beforeend', GaleryItems);

// console.log (createGaleryItems(galleryItems));

function createGaleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      
    />
  </a>
</div>`;
       
    }).join('');

    console.log(markup);
}

galeryContainer.addEventListener("click", onClick);

   function onClick(event) { 
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `,
        {
            onShow: () => { window.addEventListener("keydown", onEscape) }
        }
    )

    instance.show();

    function onEscape(event) { 
        if (event.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", onEscape)
        }
    }
}



