import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
galleryEl.addEventListener('click', onGalleryLinkClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`;
        })
        .join('');
}

function onGalleryLinkClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const largeImgUrl = evt.target.dataset.source;
    const modalEl = basicLightbox.create(`
    <img src="${largeImgUrl}" width="800" height="600">
`);
    modalEl.show();

    window.addEventListener('keydown', onKeyEscPress);
    function onKeyEscPress(evt) {
        console.log(evt);
        if (evt.code === 'Escape') {
            modalEl.close();
        }
    }
    // window.removeEventListener('keydown', onKeyEscPress);
}
