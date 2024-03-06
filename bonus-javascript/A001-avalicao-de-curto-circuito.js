/*
&& (and) -> Retornar o primeiro "valor falso", se existir uma expressão falsa nas expressões. Se todas as expressões forem verdadeiras, retorna o valor da última expressão.

|| (and) -> Retornar o primeiro "valor verdadeiro", se existir uma expressão verdadeira nas expressões. Se todas as expressões forem falsas, retorna o valor da última expressão.
*/

// Operador AND
const firstName = 'Luiz';
const lastname = 'Miranda';

function sayName() {
  console.log(firstName + ' ' + lastname);
}

firstName && lastname && sayName();

// Operador OR

const defaultColor = 'black';
let userColor = 'red' || defaultColor;

console.log(userColor);
