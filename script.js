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