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
  
 })

 maximo.addEventListener('change', (e) => {
    
    datoBusqueda.maximo = e.target.value;
   
 })

 puertas.addEventListener('change', (e) => {
    
    datoBusqueda.puertas = e.target.value;
    
 })

 transmision.addEventListener('change', (e) => {
    
    datoBusqueda.transmision = e.target.value;
   
 })

 color.addEventListener('change', (e) => {
    
    datoBusqueda.color = e.target.value;
   
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
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear );
    //console.log(resultado);
    mostrarAutos(resultado);
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