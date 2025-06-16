"use strict";

/**
 * Эффективное возведение в степень x^n.
 * @param {number} x - основание
 * @param {number} n - целый показатель степени
 * @returns {number} x в степени n
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
 * Сумма чисел от 1 до n.
 * @param {number} n - натуральное число
 * @returns {number} сумма 1..n
 */
function sumTo(n) {
  n = Number(n);
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('n должно быть натуральным числом (≥1)');
  }
  return n * (n + 1) / 2;
}

/**
 * Проверка, является ли год високосным.
 * @param {number} year - значение года
 * @returns {boolean} true если год високосный
 */
function isLeapYear(year) {
  if (!Number.isInteger(year)) {
    throw new TypeError('Год должен быть целым числом');
  }
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Факториал с использованием рекурсии и BigInt.
 * @param {number} n - целое число ≥ 0
 * @returns {bigint} n!
 */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n должно быть целым числом ≥ 0');
  }
  return n === 0 ? 1n : BigInt(n) * factorial(n - 1);
}

/**
 * Быстрое вычисление чисел Фибоначчи с использованием метода удвоения.
 * @param {number} n - целое число ≥ 0
 * @returns {bigint} n-ое число Фибоначчи
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
 * Создает компаратор, сравнивающий с x.
 * @param {number} x - эталонное значение
 * @returns {(y:number)=>boolean|null} функция сравнения
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
 * Суммирует произвольное количество чисел.
 * @param {...number} nums числа для суммирования
 * @returns {number} сумма аргументов
 */
function sum(...nums) {
  return nums.reduce((acc, v) => acc + v, 0);
}

/**
 * Помечает объект символом Symbol.for('blackSpot').
 * @param {Object} obj объект для модификации
 * @returns {Object} тот же объект с blackSpot
 */
function addBlackSpot(obj) {
  if (obj === null || typeof obj !== 'object') {
    throw new TypeError('Ожидается объект');
  }
  obj[Symbol.for('blackSpot')] = true;
  return obj;
}

/**
 * Получает десятичную дробь из строкового представления.
 * @param {string} raw число в строковом виде
 * @returns {number} десятичная часть
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
 * Нормализует URL к схеме https.
 * @param {string} url входной url
 * @returns {string} нормализованный url
 */
function normalizeUrl(url) {
  return 'https://' + url.replace(/^https?:\/\//, '');
}

/**
 * Проверяет текст на наличие спам-слов.
 * @param {string} str входной текст
 * @returns {boolean} true если найден спам
 */
function checkSpam(str) {
  const s = str.toLowerCase();
  return s.includes('viagra') || s.includes('xxx');
}

/**
 * Обрезает строку до максимальной длины с многоточием.
 * @param {string} str исходная строка
 * @param {number} maxlength максимальная длина
 * @returns {string} обрезанная строка
 */
function truncate(str, maxlength) {
  return str.length > maxlength
    ? str.slice(0, maxlength - 1) + '\u2026'
    : str;
}

/**
 * Преобразует строку с дефисами в camelCase.
 * @param {string} str строка с дефисами
 * @returns {string} строка в camelCase
 */
function camelize(str) {
  function ucFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return str.split('-').map((w, i) => i ? ucFirst(w) : w).join('');
}

/**
 * Массив первых n чисел Фибоначчи, начиная с 0.
 * @param {number} n количество чисел (натуральное)
 * @returns {bigint[]} числа Фибоначчи
 */
function fibs(n) {
  return Array.from({ length: n }, (_, i) => fib(i));
}

/**
 * Возвращает копию массива, отсортированную в обратном числовом порядке.
 * @param {number[]} arr массив чисел
 * @returns {number[]} отсортированная копия
 */
function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Получает уникальные значения из массива с сохранением порядка.
 * @param {Array} arr входной массив
 * @returns {Array} массив уникальных значений
 */
function unique(arr) {
  return [...new Set(arr)];
}

