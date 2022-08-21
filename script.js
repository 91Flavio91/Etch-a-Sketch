function makeGrid(a, b) {

    const screen = document.getElementById('screen');
    let divRow = undefined;

    for (i = 0; a > i; i++) {
        divRow = document.createElement('div')
        screen.appendChild(divRow);
    }

    const divRows = document.querySelectorAll('#screen div');
    let divSquare = undefined;

    divRows.forEach(function (element) {
        for (i = 0; b > i; i++) {
            divSquare = document.createElement('div');
            element.appendChild(divSquare)
        }
    })
}

makeGrid(30, 50);




function changeSquareColor() {

    const squares = document.querySelectorAll('#screen div div');
    squares.forEach(function (element) {
        element.addEventListener('mouseenter', changeColor);
        element.addEventListener('mouseleave', function() { this.removeEventListener('mouseenter', changeColor) });
    })
};

function changeColor() {
    this.style.backgroundColor = randomColor();
}

function randomColor() {
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function randomValue() {
    return Math.floor(Math.random() * 256);
}

changeSquareColor();










const btnChangeGrid = document.getElementById('change-grid');
const btnRefresh = document.getElementById('refresh');
const popup = document.querySelector('#popup');
const btnsPopUp = document.querySelectorAll('#popup button');
btnChangeGrid.addEventListener('mouseenter', function () { this.classList.add('hover-style') });
btnChangeGrid.addEventListener('mouseleave', function () { this.classList.remove('hover-style') });
btnRefresh.addEventListener('mouseenter', function () { this.classList.add('hover-style') });
btnRefresh.addEventListener('mouseleave', function () { this.classList.remove('hover-style') });
btnsPopUp.forEach(function (element) {
    element.addEventListener('mouseenter', function () { this.classList.add('hover-style') });
    element.addEventListener('mouseleave', function () { this.classList.remove('hover-style') });
});

btnChangeGrid.addEventListener('mousedown', function () { this.classList.add('click-style') });
btnChangeGrid.addEventListener('mouseup', openPopUp);
btnRefresh.addEventListener('mousedown', function () { this.classList.add('click-style') });
btnRefresh.addEventListener('mouseup', refreshGrid);

function openPopUp() {
    this.classList.remove('click-style');

    popup.classList.add('opened-popup');
}

function refreshGrid() {
    this.classList.remove('click-style');

    const squares = document.querySelectorAll('#screen div div');
    squares.forEach(element => element.style.backgroundColor = null);

    changeSquareColor();
}