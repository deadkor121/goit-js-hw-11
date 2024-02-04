// Підключення бібліотек
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import closeIcon from './img/bi_x-octagon.png';

// Отримання посилань на необхідні DOM-елементи
const form = document.querySelector('form');
const list = document.querySelector('.gallery');

// Додаємо обробник події для кнопки пошуку
form.addEventListener('submit', onSearchButton);

// Функція обробки події пошуку
function onSearchButton(e) {
    e.preventDefault();
    const inputSearch = form.elements.search.value.trim();
    if (inputSearch === '') {
        showErrorMessage('Please, enter what you want to find!');
        return;
    }
    addClass(form, 'loading');
    getPhotos(inputSearch);
    form.reset();
}

// Додати клас до елементу
function addClass(element, className) {
    element.classList.add(className);
}

// Отримання фотографій за допомогою API
function getPhotos(inputSearch) {
    const searchParams = new URLSearchParams({
        key: "31960717-8c82352157f13e8057b3011e3",
        q: inputSearch,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    const url = `https://pixabay.com/api/?${searchParams}`;
    return fetch(url)
        .then(response => response.json())
        .then(photos => {
            const arrayPhotos = photos.hits;
            if (arrayPhotos.length === 0) {
                noImages();
            }
            removeClass(form, 'loading');
            renderPhoto(arrayPhotos);
        })
        .catch(error => {
            showErrorMessage(error);
            removeClass(form, 'loading');
        });
}

// Видалити клас з елементу
function removeClass(element, className) {
    element.classList.remove(className);
}

// Обробник, який викликається, коли фотографії не знайдені
function noImages() {
    list.innerHTML = '';
    showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
}

// Рендеринг фотографій
function renderPhoto(photos) {
    const markup = photos
        .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) =>
            `<li class='gallery-item'>
                <a class='gallery-link' href='${largeImageURL}'>
                    <img class='gallery-image' src='${webformatURL}' alt='${tags}'/>
                </a>
                <div class='container-app'>
                    <p><span>Likes</span> ${likes}</p>
                    <p><span>Views</span> ${views}</p>
                    <p><span>Comments</span> ${comments}</p>
                    <p><span>Downloads</span> ${downloads}</p>
                </div>
            </li>`)
        .join('');
    list.insertAdjacentHTML('afterBegin', markup);
    initLightbox();
}

// Ініціалізація Lightbox
function initLightbox() {
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsPosition: 'bottom',
        captionDelay: 250,
    });
    gallery.on('show.simpleLightbox');
    gallery.refresh();
}

// Відображення повідомлення про помилку
function showErrorMessage(message) {
    iziToast.error({
        messageColor: '#FFF',
        color: '#EF4040',
        iconUrl: closeIcon,
        position: 'topRight',
        message: message,
    });
}
