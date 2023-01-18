
let idramo;
let rowCounter = 10;

let colorDefault = "#ffffff";

function RGBAToHexA(rgba, forceRemoveAlpha = false) {
  return "#" + rgba.replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
    .split(',') // splits them at ","
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map(string => parseFloat(string)) // Converts them to numbers
    .map((number, index) => index === 3 ? Math.round(number * 255) : number) // Converts alpha to 255 number
    .map(number => number.toString(16)) // Converts numbers to hex
    .map(string => string.length === 1 ? "0" + string : string) // Adds 0 when length of one number is 1
    .join("") // Puts the array to togehter to a string
}

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

      // get parent element
      const parent = btn.parentElement;
      // get p tag
      const p = parent.querySelector('p');
      // get text content
      const textramo = p.textContent;
      let color = RGBAToHexA(parent.style.backgroundColor);
      if (color == "#NaN") {
        color = colorDefault;
      }
      console.log(color);

      ramoinput = document.getElementById("nombreramo");
      coloramo = document.getElementById("coloramo");

      if (textramo != "" && color != "#ffffff") {
        ramoinput.value = textramo;
        coloramo.value = color;
      }
      // ramoinput.value = textramo;
      // coloramo.value = color;

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
  location.reload();
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

  // se guardan los valores en la casilla
  ramoElement.style.backgroundColor = coloramo.value;
  p.textContent = ramoinput.value;

  window.location.href = "#";
});



function addRow() {
  const horario = document.getElementById('horario');

  if (rowCounter < 13) {
    const newHeight = horario.offsetHeight + 50;
    horario.style.height = `${newHeight}px`;
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

function showEditBtns() {
  if (btnEdit.innerHTML === "Editar filas") {
    btnEdit.innerHTML = "Guardar filas";
  } else {
    btnEdit.innerHTML = "Editar filas";
  }
  const addRow = document.querySelector(".add-row");
  const delRow = document.querySelectorAll(".del-row");
  addRow.classList.toggle("show")
  delRow.forEach((del) => {
    del.classList.toggle("show")
  })
}
const btnEdit = document.getElementById("edit-rows");
btnEdit.addEventListener("click", showEditBtns);
// toggle name of edit button



function printToPdf() {
  window.jsPDF = window.jspdf.jsPDF;
  var docPDF = new jsPDF({
    orientation: "l",
    format: "letter"
  });
  const horarioToPdf = document.getElementById("horario-container");
  docPDF.html(horarioToPdf, {
    callback: function (docPDF) {
      docPDF.save("Horario");
    },
    x: 15,
    y: 5,
    width: 250,
    windowWidth: 1000
  });
}

// function printToPng() {
//   const horarioToPng = document.getElementById("horario-container");

// }

const btnPdf = document.getElementById("btn-pdf");
// const btnPng = document.getElementById("btn-png");

btnPdf.addEventListener("click", printToPdf);
// btnPng.addEventListener("click", printToPng);


setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
  const horarioToPng = document.getElementById("horario-container");
  const height = horarioToPng.offsetHeight;
  document.getElementById("btn-png").addEventListener("click", function () {
    html2canvas(horarioToPng, {
      onrendered: function (canvas) {
      },
      width: 1100,
      height: 700,
      x: 100,
      y: -50
    }).then(function (canvas) {
      simulateDownloadImageClick(canvas.toDataURL(), "Horario.png");
    });
  });
}

function simulateDownloadImageClick(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download !== 'string') {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    link.click();
    link.remove();
  }
}


