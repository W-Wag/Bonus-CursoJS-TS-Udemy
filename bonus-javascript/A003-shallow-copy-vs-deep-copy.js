const cloneDeep = require('lodash/cloneDeep');

// Shallow copy
// Apenas faz a copia de valores primitivos
const person = {
  firstName: 'Sergio',
  lastName: 'Santos',
  age: 35,
  address: {
    line1: 'Av. Barcelona',
    line2: 'Espanha City',
  },
  date: new Date(),
  boolean: new Boolean(false),
};
console.log('###### ######');
const person2 = { ...person };
console.log(person, person2);

// Cópia mais profunda para objetos simples
// Não copia proto ou seja funções e métodos
const person3 = JSON.parse(JSON.stringify(person));
console.log('###### ######');
console.log(person3);

// Deep copy mais simples
// Não torna possível a reconfiguração do objeto, além de aumentar a complexidade da função, quanto mais coisas o objeto ter
console.log('###### ######');
function myCloneDeep(obj) {
  if (!obj) return obj;
  if (typeof obj !== 'object') return obj;

  const newObj = obj.constructor();
  const keys = Object.getOwnPropertyNames(obj);

  for (let key of keys) {
    newObj[key] = myCloneDeep(obj[key]);
  }

  return newObj;
}
console.log('###### ######');
const person4 = myCloneDeep(person);
console.log(person4);

// Bibliotecas para um deep copy mais completo
console.log('###### ######');
const person5 = cloneDeep(person);
console.log(person5);
