// Variables
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
  //Agrega cursos presionando "Agregar al carrito."
  listaCursos.addEventListener("click", agregarCurso);

  //Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  // Al Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

//Funciones

function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSelecionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSelecionado);
  }
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-curso")) {
    // e.target.parentElement.parentElement.remove();
    const cursoId = e.target.getAttribute("data-id");

    // Eliminar del arreglo del carrito
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHTML();
  }
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso.
function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  if (articulosCarrito.some((curso) => curso.id === infoCurso.id)) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);

  // console.log(articulosCarrito)
  carritoHTML();
}

function carritoHTML() {
  //Limpiar HTML.
  limpiarHTML();

  //Recorre el carrito de compras en el HTML.
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                <img src="${imagen}" width="150">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        `;
    //Agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos del tbody.
function limpiarHTML() {
  //Forma lenta
  // contenedorCarrito.innerHTML = '';
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
