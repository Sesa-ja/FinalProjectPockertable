export function random(max) {
  return Math.floor(Math.random() * max);
}

export function c(n, k, f = 1) {
  if (k > n) return 0; // Choosing more than available items is not possible
  if (k === 0 || k === n) return 1; // Base cases

  // Calculate factorial of a number
  function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // Use the formula C(n, k) = n! / (k! * (n - k)!)
  return (factorial(n) / (factorial(k) * factorial(n - k))) ** f;
}
