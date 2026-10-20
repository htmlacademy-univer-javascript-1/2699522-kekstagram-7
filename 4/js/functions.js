const checkLength = (string, maxLength) => string.length <= maxLength;
console.log(checkLength('проверяемая строка', 20)); // true
console.log(checkLength('проверяемая строка', 18)); // true
console.log(checkLength('проверяемая строка', 10)); // false

const isPalindrome = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    reverseString += normalString[i];
  }
  return normalString === reverseString;
};
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

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
console.log(extractNumbers('2023 год'));            // 2023
console.log(extractNumbers('ECMAScript 2022'));     // 2022
console.log(extractNumbers('1 кефир, 0.5 батона')); // 105
console.log(extractNumbers('агент 007'));           // 7
console.log(extractNumbers('а я томат'));           // NaN
console.log(extractNumbers(2023)); // 2023
console.log(extractNumbers(-1));   // 1
console.log(extractNumbers(1.5));  // 15
