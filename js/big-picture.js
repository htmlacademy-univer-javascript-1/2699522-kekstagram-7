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
const COMMENTS_PER_PORTION = 5;
let comments = [];
let shownComments = 0;

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

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const nextComments = comments.slice(
    shownComments,
    shownComments + COMMENTS_PER_PORTION
  );
  nextComments.forEach((comment) => {
    fragment.append(createComment(comment));
  });
  socialComments.append(fragment);
  shownComments += nextComments.length;
  commentCount.firstChild.textContent = `${shownComments} из `;
  if (shownComments >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const onCommentsLoaderClick = () => {
  renderComments();
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
  comments = photo.comments;
  shownComments = 0;
  socialComments.replaceChildren();
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  renderComments();
  document.addEventListener('keydown', onDocumentKeydown);
};

cancelButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export { openBigPicture };
