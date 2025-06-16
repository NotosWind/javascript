"use strict";

/**
 * Efficient exponentiation x^n.
 * @param {number} x - base value
 * @param {number} n - integer exponent
 * @returns {number} x raised to power n
 */
function pow(x, n) {
  if (!Number.isInteger(n)) {
    throw new TypeError('Показатель степени n должен быть целым числом');
  }
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);

  let result = 1,
      base = x;
  while (n > 0) {
    if (n & 1) result *= base;
    base *= base;
    n >>= 1;
  }
  return result;
}

/**
 * Sum of numbers from 1 to n.
 * @param {number} n - natural number
 * @returns {number} sum 1..n
 */
function sumTo(n) {
  n = Number(n);
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('n должно быть натуральным числом (≥1)');
  }
  return n * (n + 1) / 2;
}

/**
 * Check if a year is leap.
 * @param {number} year - year value
 * @returns {boolean} true if leap year
 */
function isLeapYear(year) {
  if (!Number.isInteger(year)) {
    throw new TypeError('Год должен быть целым числом');
  }
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Factorial using recursion and BigInt.
 * @param {number} n - integer ≥ 0
 * @returns {bigint} n!
 */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n должно быть целым числом ≥ 0');
  }
  return n === 0 ? 1n : BigInt(n) * factorial(n - 1);
}

/**
 * Fast Fibonacci using doubling.
 * @param {number} n - integer ≥ 0
 * @returns {bigint} nth Fibonacci number
 */
function fib(n) {
  function fibPair(k) {
    if (k === 0) return [0n, 1n];
    const [a, b] = fibPair(Math.floor(k / 2));
    const c = a * (2n * b - a);
    const d = a * a + b * b;
    return k % 2 === 0 ? [c, d] : [d, c + d];
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n должно быть целым числом ≥ 0');
  }
  return fibPair(n)[0];
}

/**
 * Create a comparator that compares to x.
 * @param {number} x - reference value
 * @returns {(y:number)=>boolean|null} comparison function
 */
function compare(x) {
  return function(y) {
    if (!Number.isInteger(y)) {
      throw new TypeError('y должно быть целым числом');
    }
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

/**
 * Sum arbitrary numbers.
 * @param {...number} nums numbers to sum
 * @returns {number} sum of arguments
 */
function sum(...nums) {
  return nums.reduce((acc, v) => acc + v, 0);
}

/**
 * Mark object with Symbol.for('blackSpot').
 * @param {Object} obj object to modify
 * @returns {Object} same object with blackSpot
 */
function addBlackSpot(obj) {
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('Ожидается объект');
  }
  obj[Symbol.for('blackSpot')] = true;
  return obj;
}

/**
 * Get decimal fraction from string representation.
 * @param {string} raw number in string form
 * @returns {number} decimal part
 */
function getDecimalFromString(raw) {
  raw = raw.trim();
  if (!/^-?\d+(\.\d+)?$/.test(raw)) {
    throw new Error('Неверный формат числа');
  }
  const num = Number(raw);
  const match = raw.match(/\.(\d+)$/);
  const precision = match ? match[1].length : 0;
  const frac = ((num % 1) + 1) % 1;
  return Number(frac.toFixed(precision));
}

/**
 * Normalize URL to https scheme.
 * @param {string} url input url
 * @returns {string} normalized url
 */
function normalizeUrl(url) {
  return 'https://' + url.replace(/^https?:\/\//, '');
}

/**
 * Check text for spam words.
 * @param {string} str input text
 * @returns {boolean} true if spam found
 */
function checkSpam(str) {
  const s = str.toLowerCase();
  return s.includes('viagra') || s.includes('xxx');
}

/**
 * Truncate string to maxlength with ellipsis.
 * @param {string} str source string
 * @param {number} maxlength max length
 * @returns {string} truncated string
 */
function truncate(str, maxlength) {
  return str.length > maxlength
    ? str.slice(0, maxlength - 1) + '\u2026'
    : str;
}

/**
 * Convert dashed string to camelCase.
 * @param {string} str dashed string
 * @returns {string} camelCased
 */
function camelize(str) {
  function ucFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return str.split('-').map((w, i) => i ? ucFirst(w) : w).join('');
}

/**
 * Array of first n Fibonacci numbers starting from 0.
 * @param {number} n amount of numbers (natural)
 * @returns {bigint[]} fibonacci numbers
 */
function fibs(n) {
  return Array.from({ length: n }, (_, i) => fib(i));
}

/**
 * Return copy of array sorted in reverse numeric order.
 * @param {number[]} arr array of numbers
 * @returns {number[]} sorted copy
 */
function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Get unique values from array preserving order.
 * @param {Array} arr input array
 * @returns {Array} array of unique values
 */
function unique(arr) {
  return [...new Set(arr)];
}

