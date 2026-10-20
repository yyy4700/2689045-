
function max(n1, n2) {
  return n1 > n2 ? n1 : n2;

}


function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
  return n * factorial((n-2))
}


function pibo(n) {
  if (n <= 2) return 1;
  return pibo(n - 1) + pibo(n - 2);
} 



function calc(n1, n2, operator) {
  switch (operator) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    case '/': return n1 /n2;
    default: return '올바르지 않은 연산자입니다.';
  }
}


console.log(`max(2, 5) -> ${max(2, 5)}`);
console.log(`factorial(3) -> ${factorial(3)}`);
console.log(`pibo(6) -> ${pibo(6)}`);
console.log(`calc(3, 5, '+') -> ${calc(3, 5, '+')}`);
console.log(`calc(8, 2, '/') -> ${calc(8, 2, '/')}`);