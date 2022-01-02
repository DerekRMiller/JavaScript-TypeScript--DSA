export const factorialJs = (n) => {
  if (n === 1) return 1;
  return n * factorialJs(n - 1);
};
