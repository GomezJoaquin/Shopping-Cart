// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al Carrito".
    listaCursos.addEventListener('click', agregarCurso);

}

//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSelecionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSelecionado);
    }

}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso. 

function leerDatosCurso(curso) {

    //Crear objeto con el contenido del curso actual.
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //Agrega elementos al arreglo del carrito. 

    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);
    carritoHTML();
}


function carritoHTML() {

    //Limpiar HTML.
    limpiarHTML();

    //Recorre el carrito de compras en el HTML. 
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="150">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            ${curso.cantidad}</td>
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

