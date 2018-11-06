
export function calculate(a, b, operator) {
  switch(operator) {
    case '/':
      return a / b;
    case '*':
      return a * b;
    case '-':
      return a - b;
    case '+':
      return a + b;
    default: 
      return 'ERROR';
  }
}