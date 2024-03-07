function zeroFill(n) {
  return n < 9 ? `0${n}` : `${n}`;
}

function formatDate(date) {
  const d = zeroFill(date.getDate());
  const mo = zeroFill(date.getMonth());
  const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());

  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

function render(data) {
  const date = document.querySelector('.date');
  date.innerHTML = data;
}

Date.prototype.addDays = function (days) {
  return this.setDate(this.getDate() + days);
};

class MyDate extends Date {
  addDays(days) {
    if (typeof days !== 'number') {
      throw new Error('Days as to be a number');
    }
    this.setDate(this.getDate() + days);
  }
}

const stringDate = '2024-03-07T10:00:00-03:00';

// Formas de adicionar ou remover tempo em datas
const date = new Date(stringDate);
const myDate = new MyDate(stringDate);

date.setSeconds(date.getSeconds() + 59);
date.setMinutes(date.getMinutes() + 59);
date.setHours(date.getHours() + 2);
date.setDate(date.getDate() + 5);
date.setMonth(date.getMonth() + 3);
date.setFullYear(date.getFullYear() + 5);

date.addDays(10);

myDate.addDays(10);

console.log(formatDate(myDate));

// Comparar datas diferentes

const start = new Date(stringDate);
const end = new Date('2024-03-17T10:00:00-03:00');
const result = end - start;

//             ms       s     mi   h   d
const time = result / 1000 / 60 / 60 / 24;
render(time.toFixed(3));
