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
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSelecionado = e.target.parentElement;
        leerDatosCurso(cursoSelecionado);
    }

}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso. 
function leerDatosCurso(curso){
    console.log(curso);

    //Crear objeto con el contenido del curso actual.
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCurso);
}

//Elimina los cursos del tbody. 
function limpiarHTML(){
    
}