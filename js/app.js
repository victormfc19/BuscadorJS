// Variables

const resultado = document.querySelector('#resultado'); 
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();


    llenarSelect();
});


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
    
    for(let i = max; i >= min ; i--){
        
        const yearHTML = document.createElement('option');
        yearHTML.textContent = `
            ${i}
        `;
        year.appendChild(yearHTML);
    }

     
}