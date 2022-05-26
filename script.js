const body = document.querySelector('body');
const container = document.querySelector('.container');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const obj = {
    '0': 'Sun',
    '1': 'Mon',
    '2': 'Tues',
    '3': 'Wed',
    '4': 'Thur',
    '5': 'Fri',
    '6': 'Sat',
};
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();

function displayData() {
    for (let i = 1; i < 32; i++) {
        const div = document.createElement('div');
        div.classList.add('wrapper');
        container.append(div);
        div.textContent = i;
    };
    for (let i =0; i < 7; i++) {
        const div = document.createElement('div');
        div.classList.add('wrapper');
        day.append(div);
        div.textContent = obj[i];
    };
};

displayData();

function toggle() {
    const arr = document.querySelectorAll('.wrapper');
    arr.forEach((item)=> {
        if(item.textContent == date.getDate()) {
            item.classList.add('active');
        }
    })
    month.textContent = monthArr[date.getMonth()];
    year.textContent = date.getFullYear();
};

toggle();

