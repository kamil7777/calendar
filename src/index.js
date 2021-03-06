/* eslint-disable linebreak-style */
const body = document.querySelector('body');
const container = document.querySelector('.container');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const yearlist = document.querySelector('.yearlist');
const obj = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tues',
  3: 'Wed',
  4: 'Thur',
  5: 'Fri',
  6: 'Sat',
};
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
function displayData() {
  for (let i = 1; i < 32; i += 1) {
    const div = document.createElement('div');
    div.classList.add('wrapper');
    container.append(div);
    div.textContent = i;
  }
  for (let i = 0; i < 7; i += 1) {
    const div = document.createElement('div');
    div.classList.add('wrapper');
    day.append(div);
    div.textContent = obj[i];
  }
  for (let i = 0; i < 6; i += 1) {
    const div = document.createElement('div');
    div.classList.add('item-year');
    const span = document.createElement('span');
    yearlist.append(div);
    div.append(span);
    span.textContent = date.getFullYear() + i;
  }
}

displayData();

const arr = document.querySelectorAll('.wrapper');

function toggle() {
  arr.forEach((item) => {
    if (Number(item.textContent) === date.getDate()) {
      item.classList.add('active');
    }
  });
  month.textContent = monthArr[date.getMonth()];
  year.querySelector('span').textContent = date.getFullYear();
}

toggle();

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('wrapper')) e.target.classList.toggle('pushButton');
  body.addEventListener('click', () => {
    arr.forEach((item) => item.classList.remove('pushButton'));
  }, true);
});

/* year.addEventListener('click', () => yearlist.classList.toggle('visible')); */
