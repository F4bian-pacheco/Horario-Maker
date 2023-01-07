
const btns = document.querySelectorAll('.btns');
let idramo;
nuevoHorario()
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

function nuevoHorario() {
  const ramos = document.querySelectorAll('.ramo');
  ramos.forEach(ramo => {
    const p = ramo.querySelector('p');
    p.textContent = "";
    ramo.style.backgroundColor = "#fff";
  });
}

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
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
});






