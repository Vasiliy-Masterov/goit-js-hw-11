export { createMarkupListImagies };

function createMarkupListImagies(arrayImagies) { 
   const makeupListImagies = arrayImagies.map(image => {
        const { webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads} = image;
    
       return `<div class="photo-card" >
                <a class="gallery__item" href='${largeImageURL}'>
                <img src="${webformatURL}" alt="${tags}" loading="lazy" class="img-card"/>
                </a>
                <div class="info">
                  <p class="info-item">
                    <b>Likes</b><span class="info-amount">${likes}</span>
                  </p>
                  <p class="info-item">
                    <b>Views</b><span class="info-amount">${views}</span>
                  </p>
                  <p class="info-item">
                    <b>Comments</b><span class="info-amount">${comments}</span>
                  </p>
                  <p class="info-item">
                    <b>Downloads</b><span class="info-amount">${downloads}</span>
                  </p>
                </div>
              </div>`;
    }).join("");
  return makeupListImagies;
}  
