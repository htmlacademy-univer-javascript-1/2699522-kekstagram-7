import {getRandomInteger, getRandomArrayElement} from './util.js';

const PHOTO_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const DESCRIPTIONS = [
  'Закат на море',
  'Утренний кофе',
  'Прогулка по осеннему парку',
  'Рабочий процесс',
  'Мой любимый кот',
  'Вкусный ужин',
  'Путешествие в горы',
  'Уютный вечер дома'
];

const NAMES = [
  'Артём',
  'София',
  'Максим',
  'Виктория',
  'Иван',
  'Полина',
  'Дмитрий',
  'Елизавета'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографии, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomInteger(1, 2) === 1
    ? getRandomArrayElement(MESSAGES)
    : `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => {
  const commentsCount = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  const commentsArray = [];
  for (let i = 1; i <= commentsCount; i++) {
    commentsArray.push(createComment(i * getRandomInteger(10, 100)));
  }
  return commentsArray;
};

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: generateComments()
});

const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(createPhotoDescription(i));
  }
  return photos;
};

const photoList = generatePhotos();

export {photoList};
