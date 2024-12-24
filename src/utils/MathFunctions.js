export function random(max) {
  return Math.floor(Math.random() * max);
}

export function combination(n, k) {
  if (k > n) return 0;
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= (n - i + 1) / i;
  }
  return result;
}
