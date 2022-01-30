let container = document.querySelector(".container");
// create a row div


function createGrid(numberOfRows) {
    for (let i = 0; i < numberOfRows; i++) {
      let row = document.createElement('div');

      row.setAttribute('class', 'row');
      row.textContent = "A new div";
      container.appendChild(row);
    }
}

createGrid(3);
