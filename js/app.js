// Variables

const resultado = document.querySelector('#resultado');


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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