
let idramo;
let rowCounter = 10;

function mapBtns() {
  const btns = document.querySelectorAll('.btns');
  btns.forEach(btn => {
    const editBtn = btn.querySelector('.edit-btn');
    // wrap editBtn in a link tag
    const editLink = document.createElement('a');
    editLink.setAttribute('href', '#demo-modal');
    editLink.appendChild(editBtn);
    btn.appendChild(editLink);

    const deleteBtn = btn.querySelector('.trash-btn');
    //move deleteBtn before editBtn
    btn.insertBefore(editLink, deleteBtn);

    editBtn.addEventListener('click', () => {

      //save coords of editBtn in local storage
      const coords = editBtn.getBoundingClientRect();
      const coordsObj = {
        x: coords.x,
        y: coords.y
      };
      localStorage.setItem('coords', JSON.stringify(coordsObj));

      // get parent element
      const parent = btn.parentElement;
      // get p tag
      const p = parent.querySelector('p');

      // get parent id
      const ramoId = parent.id;
      idramo = ramoId;
      ramoElement = document.getElementById(ramoId);

    });

    deleteBtn.addEventListener('click', () => {
      const parent = btn.parentElement;
      // get p tag
      const p = parent.querySelector('p');
      p.textContent = "";
      parent.style.backgroundColor = "#fff";
    });
  });
}

mapBtns();



function nuevoHorario() {
  const ramos = document.querySelectorAll('.ramo');
  ramos.forEach(ramo => {
    const p = ramo.querySelector('p');
    p.textContent = "";
    ramo.style.backgroundColor = "#fff";
  });
}

const saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', () => {
  idramoinput = document.getElementById("idramo");
  idramoinput.value = idramo;
  console.log(idramoinput.value);

  coloramo = document.getElementById("coloramo");
  ramoinput = document.getElementById("nombreramo");

  const ramoElement = document.getElementById(idramo);
  const p = ramoElement.querySelector('p');

  ramoElement.style.backgroundColor = coloramo.value;
  p.textContent = ramoinput.value;

  window.location.href = "#";
  const coords = JSON.parse(localStorage.getItem('coords'));
  scrollTo(coords.x, coords.y);
});



function addRow() {
  const container = document.querySelector('.container');
  const horario = document.getElementById('horario');
  console.log(horario.offsetHeight)
  const newHeight = horario.offsetHeight + 50;
  horario.style.height = `${newHeight}px`;
  if (rowCounter < 13) {
    rowCounter++;
    horario.innerHTML += `
            <div class="item hora">
                <p><span contenteditable="true">19:10</span>-<span contenteditable="true">20:10</span></p>
            </div>
            <div class="item ramo" id="item${rowCounter}1">
                <p></p>
                <div class="btns">
                    <a href="#demo-modal">
                    <img class="edit-btn" src="images/edit.svg" alt="">
                    </a>
                    <img class="trash-btn" src="images/trash.svg" alt="">
                </div>
            </div>
            <div class="item ramo" id="item${rowCounter}2">
                <p></p>
                <div class="btns">
                    <a href="#demo-modal">
                    <img class="edit-btn" src="images/edit.svg" alt="">
                    </a>
                    <img class="trash-btn" src="images/trash.svg" alt="">
                </div>
            </div>
            <div class="item ramo" id="item${rowCounter}3">
                <p></p>
                <div class="btns">
                    <a href="#demo-modal">
                    <img class="edit-btn" src="images/edit.svg" alt="">
                    </a>
                    <img class="trash-btn" src="images/trash.svg" alt="">
                </div>
            </div>
            <div class="item ramo" id="item${rowCounter}4">
                <p></p>
                <div class="btns">
                    <a href="#demo-modal">
                    <img class="edit-btn" src="images/edit.svg" alt="">
                    </a>
                    <img class="trash-btn" src="images/trash.svg" alt="">
                </div>
            </div>
            <div class="item ramo" id="item${rowCounter}5">
                <p></p>
                <div class="btns">
                    <a href="#demo-modal">
                    <img class="edit-btn" src="images/edit.svg" alt="">
                    </a>
                    <img class="trash-btn" src="images/trash.svg" alt="">
                </div>
            </div>
            <div class="item ramo" id="item${rowCounter}6">
                <p></p>
                <div class="btns">
                    <a href="#demo-modal">
                    <img class="edit-btn" src="images/edit.svg" alt="">
                    </a>
                    <img class="trash-btn" src="images/trash.svg" alt="">
                </div>
            </div>
            <div class="item ramo" id="item${rowCounter}7">
                <p></p>
                <div class="btns">
                    <a href="#demo-modal">
                    <img class="edit-btn" src="images/edit.svg" alt="">
                    </a>
                    <img class="trash-btn" src="images/trash.svg" alt="">
                </div>
            </div>
            <div class="del-row dr" onclick="delRow(this)" data-rowid="${rowCounter}">
                <img src="images/trash.svg" alt="">
            </div>
  `;
    mapBtns();
  } else {
    alert("No puedes agregar mas filas")
  }
}

function delRow(row) {
  const container = document.querySelector('.container');
  const horario = document.getElementById('horario');
  const rowId = row.dataset.rowid;
  console.log(rowId);
  // console.log(rowCounter)
  let listElements = Array.from(horario.children);
  listElements = listElements.slice(9, listElements.length);
  // desde el 0 al 9*1
  // desde el 9 al 9*2
  // desde el 18 al 9*3
  const elementsToDelete = listElements.slice((rowId * 9) - 9, rowId * 9);
  elementsToDelete.forEach(element => {
    element.remove();
  });
  // console.log(listElements.slice((rowId * 9) - 9, rowId * 9));

  const newHeight = horario.offsetHeight - 50;
  horario.style.height = `${newHeight}px`;
  rowCounter--;
}





