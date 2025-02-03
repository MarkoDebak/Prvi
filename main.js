function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomBoolean() {
  return Math.random() < 0.5;
}

function generateRandomArray(length, min, max) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(generateRandomNumber(min, max));
  }
  return result;
}

function generateRandomObject(properties) {
  const result = {};
  for (const property in properties) {
    if (properties.hasOwnProperty(property)) {
      switch (properties[property]) {
        case 'number':
          result[property] = generateRandomNumber(0, 100);
          break;
        case 'string':
          result[property] = generateRandomString(10);
          break;
        case 'boolean':
          result[property] = generateRandomBoolean();
          break;
        case 'array':
          result[property] = generateRandomArray(10, 0, 100);
          break;
        default:
          throw new Error(`Unsupported property type: ${properties[property]}`);
      }
    }
  }
  return result;
}

function generateRandomDate(start, end) {
  return new Date(generateRandomNumber(start.getTime(), end.getTime()));
}

function generateRandomColor() {
  const r = generateRandomNumber(0, 255);
  const g = generateRandomNumber(0, 255);
  const b = generateRandomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomGradient() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }
  return `linear-gradient(to right, ${colors.join(', ')})`;
}

function generateRandomImage(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = generateRandomColor();
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL();
}

function generateRandomAudio(duration) {
  const audio = document.createElement('audio');
  audio.src = `https://example.com/audio/${generateRandomString(10)}.mp3`;
  audio.duration = duration;
  return audio;
}

function generateRandomVideo(width, height, duration) {
  const video = document.createElement('video');
  video.src = `https://example.com/video/${generateRandomString(10)}.mp4`;
  video.width = width;
  video.height = height;
  video.duration = duration;
  return video;
}

function generateRandomText(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz ';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomParagraphs(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomText(100));
  }
  return result;
}

function generateRandomList(items) {
  const result = [];
  for (let i = 0; i < items; i++) {
    result.push(generateRandomText(10));
  }
  return result;
}

function generateRandomTable(rows, columns) {
  const result = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(generateRandomText(10));
    }
    result.push(row);
  }
  return result;
}

function generateRandomForm(fields) {
  const result = {};
  for (const field in fields) {
    if (fields.hasOwnProperty(field)) {
      switch (fields[field]) {
        case 'text':
          result[field] = generateRandomText(10);
          break;
        case 'email':
          result[field] = `${generateRandomString(10)}@example.com`;
          break;
        case 'password':
          result[field] = generateRandomString(10);
          break;
        default:
          throw new Error(`Unsupported field type: ${fields[field]}`);
      }
    }
  }
  return result;
}

function generateRandomUser() {
  return {
    name: generateRandomText(10),
    email: `${generateRandomString(10)}@example.com`,
    password: generateRandomString(10),
  };
}

function generateRandomUsers(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomUser());
  }
  return result;
}

function generateRandomProduct() {
  return {
    name: generateRandomText(10),
    price: generateRandomNumber(0, 100),
    description: generateRandomText(100),
  };
}

function generateRandomProducts(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomProduct());
  }
  return result;
}

function generateRandomOrder() {
  return {
    products: generateRandomProducts(generateRandomNumber(1, 10)),
    total: generateRandomNumber(0, 100),
  };
}

function generateRandomOrders(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomOrder());
  }
  return result;
}

function generateRandomCategory() {
  return {
    name: generateRandomText(10),
    products: generateRandomProducts(generateRandomNumber(1, 10)),
  };
}

function generateRandomCategories(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomCategory());
  }
  return result;
}

function generateRandomReview() {
  return {
    rating: generateRandomNumber(1, 5),
    comment: generateRandomText(100),
  };
}

function generateRandomReviews(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomReview());
  }
  return result;
}

function generateRandomFAQ() {
  return {
    question: generateRandomText(10),
    answer: generateRandomText(100),
  };
}

function generateRandomFAQs(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomFAQ());
  }
  return result;
}

function generateRandomBlogPost() {
  return {
    title: generateRandomText(10),
    content: generateRandomText(100),
  };
}

function generateRandomBlogPosts(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomBlogPost());
  }
  return result;
}

function generateRandomComment() {
  return {
    text: generateRandomText(100),
  };
}

function generateRandomComments(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(generateRandomComment());
  }
  return result;
}function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
}

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left).concat(right);
}

function quickSort(array) {
  if (array.length <= 1) return array;
  const pivot = array[0];
  const less = [];
  const greater = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) less.push(array[i]);
    else greater.push(array[i]);
  }
  return quickSort(less).concat(pivot, quickSort(greater));
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

function heapify(array, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && array[left] > array[largest]) largest = left;
  if (right < n && array[right] > array[largest]) largest = right;
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest);
  }
}

function heapSort(array) {
  const n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(array, n, i);
  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }
  return array;
}

function radixSort(array) {
  const max = Math.max(...array);
  let exp = 1;
  while (max / exp > 0) {
    countingSort(array, exp);
    exp *= 10;
  }
  return array;
}

function countingSort(array, exp) {
  const n = array.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);
  for (let i = 0; i < n; i++) count[Math.floor(array[i] / exp) % 10]++;
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
    count[Math.floor(array[i] / exp) % 10]--;
  }
  for (let i = 0; i < n; i++) array[i] = output[i];
}

function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

function isPerfectSquare(n) {
  if (n < 0) return false;
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
}

function isUgly(n) {
  if (n <= 0) return false;
  for (const p of [2, 3, 5]) while (n % p === 0) n /= p;
  return n === 1;
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function isArmstrong(n) {
  const digits = n.toString().split('').map(Number);
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
  return sum === n;
}

function isHarshad(n) {
  const sum = n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  return n % sum === 0;
}

function isStrong(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += factorial(i);
  return sum === n;
}

function isAbundant(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum > n;
}

function isDeficient(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum < n;
}

function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum === n;
}

function isAmicable(n) {
  const sum = getProperDivisorsSum(n);
  return sum !== n && getProperDivisorsSum(sum) === n;
}

function getProperDivisorsSum(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum;
}

function isSociable(n) {
  const chain = [n];
  let sum = getProperDivisorsSum(n);
  while (sum !== n && !chain.includes(sum)) {
    chain.push(sum);
    sum = getProperDivisorsSum(sum);
  }
  return sum === n;
}

function isUntouchable(n) {
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j < i; j++) if (i % j === 0) sum += j;
    if (sum === n) return false;
  }
  return true;
}
