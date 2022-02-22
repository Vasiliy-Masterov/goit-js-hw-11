export { getArrayImagies };
import axios from "axios";
const PIXABAY_KEY = '25809714-fb9ca043e2372697e049be88c';
const BASE_URL = 'https://pixabay.com/api/';

function getArrayImagies(searchQuery, pageLimit, numberPage) {
   return axios.get(`${BASE_URL}`, {
    params: {
        key: PIXABAY_KEY,
        q: `${searchQuery}`,
        image_type: 'photo',
        orientation: 'gorizontal',
        safesearch: true,
        per_page: pageLimit,
        page: numberPage
    }
   })
    .then(response => {
        const { totalHits, hits } = response.data;
        const arrayImagies = hits;
        return {arrayImagies, totalHits}; 
    })
    .catch(() => {
        Notiflix.Notify.failure('error');
    });
}
