export function fib(n) {
  function fibPair(k) {
    if (k === 0) return [0n, 1n];
    const [a, b] = fibPair(Math.floor(k / 2));
    const c = a * (2n * b - a);
    const d = a * a + b * b;
    return k % 2 === 0 ? [c, d] : [d, c + d];
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n должно быть целым числом \u2265 0');
  }
  return fibPair(n)[0];
}