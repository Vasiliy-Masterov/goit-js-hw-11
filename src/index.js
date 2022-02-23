import './css/styles.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getArrayImagies } from './js/getImagies.js';
import { createMarkupListImagies } from './js/createMarkup.js';
import { onButtonLoadMore, offButtonLoadMore } from './js/buttonLoadMore';

const galleryEl = document.querySelector(".gallery");
const searchFormEl = document.querySelector(".search-form");
//const buttonSubmitEl = document.querySelector("[type='submit']");
const buttonLoadMoreEl = document.querySelector(".load-more");
const searchQueryEl= document.querySelector('[name="searchQuery"]');
let searchQuery = '';
let numberPage = 1;
const pageLimit = 40;

offButtonLoadMore(buttonLoadMoreEl);

searchFormEl.addEventListener('submit', event => {
    event.preventDefault();
    if (searchQueryEl.value.trim() === '') {
        galleryEl.innerHTML = "";
        numberPage = 1;
        console.log(numberPage);
        offButtonLoadMore(buttonLoadMoreEl);
        return;
    } else if (searchQuery === searchQueryEl.value.trim()) {
        console.log(numberPage);
    return;
    } else
    if (searchQuery !== searchQueryEl.value.trim()) {
        numberPage = 1;
        console.log(numberPage);
        galleryEl.innerHTML = "";
    } 
    offButtonLoadMore(buttonLoadMoreEl);
    searchQuery = searchQueryEl.value.trim();
    console.log(numberPage);
    getArrayImagies(searchQuery, pageLimit, numberPage).then(({arrayImagies, totalHits}) => {
        if (totalHits === 0) {
         Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
          return;
        }

        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        galleryEl.insertAdjacentHTML("beforeend", createMarkupListImagies(arrayImagies));
        var lightbox = new SimpleLightbox('.gallery a', {}); 
        lightbox.refresh();
        if (totalHits > pageLimit) {onButtonLoadMore(buttonLoadMoreEl);}
        buttonLoadMoreEl.addEventListener('click', event => {
            numberPage += 1;
            console.log(numberPage);
            if (totalHits - numberPage * pageLimit < pageLimit) {
                console.log(numberPage);
                offButtonLoadMore(buttonLoadMoreEl);
                Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
                return;
            }

            getArrayImagies(searchQuery, pageLimit, numberPage).then(({ arrayImagies, totalHits }) => {
            Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);    
            galleryEl.insertAdjacentHTML("beforeend", createMarkupListImagies(arrayImagies));
               var lightbox = new SimpleLightbox('.gallery a', {}); 
               lightbox.refresh();
               console.log(numberPage);
            });
        });
    });
});













    