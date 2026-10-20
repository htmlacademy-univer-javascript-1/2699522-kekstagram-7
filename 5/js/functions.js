const checkLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    reverseString += normalString[i];
  }
  return normalString === reverseString;
};

const extractNumbers = (string) => {
  const normalString = string.toString();
  let numbers = '';
  for (let i = 0; i < normalString.length; i++) {
    const symbol = normalString[i];
    if (!Number.isNaN(parseInt(symbol, 10))) {
      numbers += symbol;
    }
  }
  return numbers === '' ? NaN : parseInt(numbers, 10);
};

const isMeetingInWorkday = (dayStart, dayEnd, meetingStart, duration) => {
  const startParts = dayStart.split(':');
  const endParts = dayEnd.split(':');
  const meetingParts = meetingStart.split(':');
  const startMinutes = Number(startParts[0]) * 60 + Number(startParts[1]);
  const endMinutes = Number(endParts[0]) * 60 + Number(endParts[1]);
  const meetingMinutes = Number(meetingParts[0]) * 60 + Number(meetingParts[1]);
  return meetingMinutes >= startMinutes && meetingMinutes + duration <= endMinutes;
};
