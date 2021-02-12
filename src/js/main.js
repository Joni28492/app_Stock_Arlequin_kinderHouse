import { productoClasePrueba, Producto } from "./classes/producto.class";

let arrLogos = [
  "Baltasar.png",
  "BlackFryday.png",
  "Duende.png",
  "Main.png",
  "Gaspar.png",
  "Melchor.png",
  "PapaNoel.png",
];

const temas = [

"alert-warning",
"alert-dark",
"alert-danger",
"alert-success",
"alert-info",
"alert-primary",
"alert-danger"
]


const body = document.body;

const logo = document.querySelector("img");

const asignarLogo = (png) => {
  logo.src = `./assets/${png}`;
};

const cambiarTema = (tema) =>{
  body.classList=tema;
}


//con el click modificamos el logo y el tema
logo.addEventListener('click', ()=>{
  const separado = logo.src.split('/');
  let src = separado[separado.length - 1];
  let idx=0;

  arrLogos.forEach((element, i) => {
    if(src === element){
      idx = (i === (arrLogos.length-1)) ? 0 : (i+1);
      
    }       

  });
  
  asignarLogo(arrLogos[idx]);
  cambiarTema(temas[idx]);
  
})






const init = () => {
  asignarLogo(arrLogos[3]);
  // productoPruebaSinTalla.imprimirClase();
  /*const producto1 = {
    id: 45,
    nombre: "productoLS",
    talla: "Talla m",
    precio: 45.32
  };
*/
  const producto2 = {
    id: 32,
    nombre: "productoLSdos",
    talla: "Talla s",
    precio: 20.80
  };

  
  /*
  //Pruebas LocalStorage
  const arrProductos =[ productoClasePrueba, producto2];
  //console.log(localStorage.getItem('Producto'));
  const productoString = localStorage.setItem("Producto", JSON.stringify(arrProductos));
  //console.log(productoString);//undefined
  const productoNoParse  = localStorage.getItem('Producto');
  console.log(JSON.parse(productoNoParse));
  */
  
};

export { init };
