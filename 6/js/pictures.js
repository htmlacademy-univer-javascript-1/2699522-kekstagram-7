const template = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const renderPictures = (photos) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const picture = template.cloneNode(true);
    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__img').alt = photo.description;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;
    fragment.appendChild(picture);
  }
  pictures.appendChild(fragment);
};

export {renderPictures};
