const etchasketch = document.querySelector(".etchasketch");
const container = document.querySelector(".container");
const button = document.createElement("button");
let rows;

createGrid(20);

etchasketch.appendChild(button);
button.textContent = "CLEAR";
button.classList.add("button");
button.addEventListener('click', resetGrid);

rows = getRows();
setHoverListeners(rows);

function getRows() {
  rows = document.querySelectorAll(".row");
  return rows;
}

function getColumns() {
  columns = document.querySelectorAll(".column");
  return columns;
}

function createGrid(numberOfRows) {
    for (let i = 0; i < numberOfRows; i++) {
      let column = document.createElement('div');

      column.setAttribute('class', 'column');

      for (let i = 0; i < numberOfRows; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.style.height = `${600 / numberOfRows}px`;
        column.appendChild(row);
      }

      container.appendChild(column);
    }
}

function setHoverListeners(rows) {
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.classList.add("changed");
    });
  });
}

function resetGrid() {
  columns = getColumns();
  columns.forEach(column => {
    column.remove();
  })
  rows.forEach(row => {
    row.remove();
  })

  numberOfRows = prompt("Number of rows - 100 is max value");
  if (numberOfRows > 100) {
    numberOfRows = 100;
  }

  createGrid(numberOfRows);
  rows = getRows();
  setHoverListeners(rows);
}
// Clear Button
// Add button to HTML. Add an eventListener for click. When clicked, the
// button will clear the grid and prompt for number of rows/columns (max 64)
