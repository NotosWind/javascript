"use strict";

/**
 * Возвращает дробную часть числа в виде положительного значения.
 * Для отрицательных чисел результат дополняется до 1.
 * @param {number} num - исходное число
 * @returns {number} дробная часть числа
 */
export function getDecimal(num) {
  const s = Math.abs(num).toString();
  const dot = s.indexOf('.');
  if (dot === -1) return 0;
  const dec = s.slice(dot + 1);
  const frac = Number('0.' + dec);
  const digits = dec.length;
  if (num >= 0) return Number(frac.toFixed(digits));
  return Number((1 - frac).toFixed(digits));
}

/**
 * Нормализует URL, заменяя протокол http на https и добавляя его при отсутствии.
 * @param {string} url - исходный URL
 * @returns {string} нормализованный URL
 */
export function normalizeUrl(url) {
  return 'https://' + url.replace(/^https?:\/\//, '');
}

/**
 * Проверяет строку на наличие спам-слов 'viagra' и 'xxx'.
 * @param {string} str - проверяемая строка
 * @returns {boolean} true, если найдены спам-слова
 */
export function checkSpam(str) {
  const s = str.toLowerCase();
  return s.includes('viagra') || s.includes('xxx');
}

/**
 * Обрезает строку до указанной длины, добавляя многоточие при необходимости.
 * @param {string} str - исходная строка
 * @param {number} maxlength - максимальная длина
 * @returns {string} обрезанная строка
 */
export function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '\u2026' : str;
}

/**
 * Преобразует строку с дефисами в стиль camelCase.
 * @param {string} str - исходная строка
 * @returns {string} преобразованная строка
 */
export function camelize(str) {
  function ucFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return str
    .split('-')
    .map((w, i) => (i ? ucFirst(w) : w))
    .join('');
}

/**
 * Создает массив из первых n чисел Фибоначчи.
 * @param {number} n - количество чисел (натуральное)
 * @returns {bigint[]} массив чисел Фибоначчи
 */
export function fibs(n) {
  function fibPair(k) {
    if (k === 0) return [0n, 1n];
    const [a, b] = fibPair(Math.floor(k / 2));
    const c = a * (2n * b - a);
    const d = a * a + b * b;
    return k % 2 === 0 ? [c, d] : [d, c + d];
  }
  function fib(m) {
    if (m < 0) throw new TypeError('m >= 0 expected');
    return fibPair(m)[0];
  }
  return Array.from({ length: n }, (_, i) => fib(i));
}

/**
 * Возвращает копию массива, отсортированную в обратном порядке.
 * @param {number[]} arr - массив чисел
 * @returns {number[]} отсортированная копия
 */
export function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений исходного массива.
 * @param {Array} arr - исходный массив
 * @returns {Array} массив без повторяющихся значений
 */
export function unique(arr) {
  return [...new Set(arr)];
}

