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

