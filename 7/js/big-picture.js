import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.width = 35;
  avatar.height = 35;
  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = comment.message;
  commentElement.append(avatar, text);
  return commentElement;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.append(createComment(comment));
  });
  socialComments.replaceChildren(fragment);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
}

const onCancelButtonClick = () => {
  closeBigPicture();
};

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureImage.src = photo.url;
  bigPictureImage.alt = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
  renderComments(photo.comments);
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { openBigPicture };
