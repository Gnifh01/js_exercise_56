//Ho scelto di usare reduce perchè lo trovavo un metodo più veloce è più semplice da usare
function sum(...numbers) {
  return numbers.reduce((sum, current) => sum + current, 0)
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

