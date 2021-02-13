


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

//HTML
const body = document.body;
const logo = document.querySelector("img");
const btnAgregar = document.querySelector('#agregar');
let btnIncrementar = document.querySelectorAll('#increase');
let btnDecrementar = document.querySelectorAll('#derecease');



const asignarLogo = (png) => {
  logo.src = `./assets/${png}`;
};

const cambiarTema = (tema) =>{
  body.classList=tema;
}


const eventos = () =>{
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

  });

  //btn agregar
  btnAgregar.addEventListener('click', () =>{
    console.log('btn agregar funciona');
  });

  //btn para incrementar cantidad
  btnIncrementar.forEach(btn => {
    btn.addEventListener('click', ()=>{
      console.log('btn incrementar');
    });
  });

  //btn para incrementar cantidad
  btnDecrementar.forEach(btn => {
    btn.addEventListener('click', ()=>{
      console.log('btn decrementar');
    });
  });

}








const init = () => {
  asignarLogo(arrLogos[3]);
  
  eventos();

  
  
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
