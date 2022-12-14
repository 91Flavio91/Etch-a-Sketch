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

function removeGrid() {
    const screen = document.getElementById('screen');
    const screenNodes = screen.childNodes;

    for (i = screenNodes.length - 1; i >= 0; i--) {
        if (screenNodes[i].nodeName === "SPAN") {
            continue;
        }
        screen.removeChild(screenNodes[i]);
    }
};










const container = document.getElementById('container')
const backdrop = document.createElement('div');
backdrop.setAttribute('id', 'backdrop');

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
btnsPopUp.forEach(function (element) {
    element.addEventListener('mousedown', function () { this.classList.add('click-style') });
    element.addEventListener('mouseup', changeGrid);
});

function openPopUp() {
    this.classList.remove('click-style');

    popup.classList.add('opened-popup');

    container.insertBefore(backdrop, popup);
}

function refreshGrid() {
    this.classList.remove('click-style');

    const squares = document.querySelectorAll('#screen div div');
    squares.forEach(element => element.style.backgroundColor = null);

    changeSquareColor();
}

function changeGrid() {
    this.classList.remove('click-style');

    if (this === btnsPopUp[0]) {
        removeGrid();
        makeGrid(15, 25);
        changeSquareColor();
    }
    else if (this === btnsPopUp[1]) {
        removeGrid();
        makeGrid(30, 50);
        changeSquareColor();
    }
    else if (this === btnsPopUp[2]) {
        removeGrid();
        makeGrid(60, 100);
        changeSquareColor();
    }

    popup.classList.remove('opened-popup');

    container.removeChild(backdrop);
}