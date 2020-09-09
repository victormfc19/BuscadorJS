// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const datoBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
};

const resultado = document.querySelector('#resultado'); 
 

const max = new Date().getFullYear();
const min = max - 10;


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos( autos );
    llenarSelect();
});

// EventsListener para los Select

marca.addEventListener('change', (e) => {
   // e.target.value: capturo la opcion del usuario
   datoBusqueda.marca = e.target.value;
   filtrarAuto();
})

year.addEventListener('change', (e) => {
   
    datoBusqueda.year =  parseInt(e.target.value);
    filtrarAuto();
 })

 minimo.addEventListener('change', (e) => {
   
    datoBusqueda.minimo = e.target.value;
    filtrarAuto();
 })

 maximo.addEventListener('change', (e) => {
    
    datoBusqueda.maximo = e.target.value;
    filtrarAuto();
 })

 puertas.addEventListener('change', (e) => {
    
    datoBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
 })

 transmision.addEventListener('change', (e) => {
    
    datoBusqueda.transmision = e.target.value;
    filtrarAuto();
 })

 color.addEventListener('change', (e) => {
    
    datoBusqueda.color = e.target.value;
    filtrarAuto();
 })

// Funciones

function mostrarAutos(autos) {
   limpiartHTML(); 
   autos.forEach(auto => { // Recorrer el arreglo
       const {marca,modelo,year,precio,puertas,color,transmision} = auto;
       const autoHTML = document.createElement('p'); // Crear elemento parrafo

       autoHTML.textContent = `   
             ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color:
             ${color}
       `;   // Darle un contenido a ese elemento

       resultado.appendChild(autoHTML); // Añadirlo al id resultado en el html
       
   });  
}

function limpiartHTML(){
    while(resultado.firstChild){
        resultado.removeChild( resultado.firstChild );
    }
}

function llenarSelect(){
    
    for(let i = max; i >= min ; i--){ // Recorrer desde el 2020 al 2010

        const yearHTML = document.createElement('option'); //Crear un elemento <option>
        yearHTML.textContent = `${i}`; // Le asigno el valor de i
        year.appendChild(yearHTML); // Lo inserto en el HTML
    }
}

// Funcion que filtre en la busqueda

function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if( resultado.length)
        mostrarAutos(resultado);
    else    
        noResultado();
}

function noResultado(){
    limpiartHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = "No hay resultados";
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = datoBusqueda;
    if(marca)
        return  auto.marca  ===  marca ;
    return auto;
}

function filtrarYear(auto){
    const { year } = datoBusqueda;
    if(year){
        return  auto.year  === year ;
    }  
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datoBusqueda;
    if(minimo){
        return auto.precio >= minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datoBusqueda;
    if( maximo ){
        return auto.precio <= maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datoBusqueda;
    if( puertas ){
        return auto.puertas === puertas
    }
    return auto;
}


function filtrarTransmision(auto){
    const { transmision } = datoBusqueda;
    if( transmision ){
        return auto.transmision  === transmision 
    }
    return auto;
}


function filtrarColor(auto){
    const { color } = datoBusqueda;
    if(color ){
        return auto.color === color
    }
    return auto;
}