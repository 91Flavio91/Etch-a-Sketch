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