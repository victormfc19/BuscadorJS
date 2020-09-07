// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const datoBusqueda = {
    marca,
    year,
    minimo,
    maximo,
    puertas,
    transmision,
    color
};

const resultado = document.querySelector('#resultado'); 
 

const max = new Date().getFullYear();
const min = max - 10;


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();


    llenarSelect();
});

// EventsListener para los Select

marca.addEventListener('change', (e) => {
   // e.target.value: capturo la opcion del usuario
   datoBusqueda.marca = e.target.value;
   console.log(datoBusqueda);
})

year.addEventListener('change', (e) => {
   
    datoBusqueda.year = e.target.value;
    console.log(datoBusqueda);
 })

 minimo.addEventListener('change', (e) => {
   
    datoBusqueda.minimo = e.target.value;
    console.log(datoBusqueda);
 })

 maximo.addEventListener('change', (e) => {
    
    datoBusqueda.maximo = e.target.value;
    console.log(datoBusqueda);
 })

 puertas.addEventListener('change', (e) => {
    
    datoBusqueda.puertas = e.target.value;
    console.log(datoBusqueda);
 })

 transmision.addEventListener('change', (e) => {
    
    datoBusqueda.transmision = e.target.value;
    console.log(datoBusqueda);
 })

 color.addEventListener('change', (e) => {
    
    datoBusqueda.color = e.target.value;
    console.log(datoBusqueda);
 })

// Funciones

function mostrarAutos() {
    
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

function llenarSelect(){
    
    for(let i = max; i >= min ; i--){ // Recorrer desde el 2020 al 2010

        const yearHTML = document.createElement('option'); //Crear un elemento <option>
        yearHTML.textContent = `${i}`; // Le asigno el valor de i
        year.appendChild(yearHTML); // Lo inserto en el HTML
    }
}

// inicialize git en VS Code