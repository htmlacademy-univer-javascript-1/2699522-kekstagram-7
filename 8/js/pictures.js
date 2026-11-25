const template = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const renderPictures = (photos, onThumbnailClick) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const picture = template.cloneNode(true);
    const image = picture.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      onThumbnailClick(photo);
    });
    fragment.append(picture);
  });
  pictures.append(fragment);
};

export { renderPictures };
