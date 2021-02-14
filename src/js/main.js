import { Producto } from "./classes/Producto.class";
import { ProductoList } from "./classes/ProductoList.class";
import {productoLista} from '../index';


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
let btnIncrementar = document.querySelectorAll('.increase');
let btnDecrementar = document.querySelectorAll('.derecease');
let btnEliminarProducto = document.querySelectorAll('.eliminarProducto');


///Listado de productos
const ulListaProducto = document.querySelector('#listaProductos');
//html inputs
const  inputNombre  = document.querySelector('#nombre');
const  inputCantidad  = document.querySelector('#cantidad');
const  inputTalla  = document.querySelector('#talla');
const  inputPrecio  = document.querySelector('#precio');

//btnDescargar y cargar
const btnDescargarJson=document.querySelector('#descargar');
const btnCargarJson=document.querySelector('#importar');

const asignarLogo = (png) => {
  logo.src = `./assets/${png}`;
};

const cambiarTema = (tema) =>{
  body.classList=tema;
  btnCargarJson.classList=`col btn ${tema} w-50 m-2`;
  btnDescargarJson.classList=`col btn ${tema} w-50 m-2`;
}



const crearProductoHTML = (producto) =>{

    const htmlProducto = `
      <li class="w-25">${producto.producto}</li>
      <li class="w-25 ">
        <button class="derecease btn btn-danger ">-</button>
        ${producto.cantidad}
        <button  class="increase btn btn-success ">+</button>
      </li>
      <li class="w-25 ${(producto.talla === '--sin talla--') ? 'text-danger':''}">${producto.talla}</li>
      <li class="w-25">${producto.precio} €</li>
      <button  class="eliminarProducto btn btn-danger ">X</button>
    `;

    const ul = document.createElement('ul');
    ul.classList='list-group list-group-horizontal container list-unstyled m-2';
    ul.id=producto.id;
    ul.innerHTML= htmlProducto;

    ulListaProducto.append(ul);
    
    return ul;
  
}

const eventos = () =>{

  //con el click modificamos el logo y el tema de fondo
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
    
    
    const nombre   =inputNombre.value;
    const cantidad =inputCantidad.value;
    const talla    =inputTalla.value;//la talla te da la posición
    const precio   =inputPrecio.value;
    //validamos que no este vacio
    if(nombre!=='' && !(cantidad<=0) && !(precio<=0)){
      
      const nuevoProducto = new Producto(nombre, cantidad, talla, precio);
      productoLista.nuevoProducto(nuevoProducto);
      crearProductoHTML(nuevoProducto);
      
      inputNombre.value='';
      inputCantidad.value='';
      inputPrecio.value='';
      
    }else{
      console.warn('Esta vacio');
     
    }


  
    

  });


  //BOTONES DE LA LISTA
  //NO ME DECTETA LOS BTN DE CADA ELEMENTO, PERO LOS INDV SI
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

  //btn para eliminar un producto concreto
  btnEliminarProducto.forEach(btn => {
      btn.addEventListener('click', ()=>{
        console.log('este es un btn para eliminar el producto');
      });
  });


  //BTN CARGAR Y DESCARGAR JSON
  btnCargarJson.addEventListener('click', ()=>{
    console.log('btn para subir JSON');
    
  });


  btnDescargarJson.addEventListener('click', ()=>{
    console.log('btn para descargar tus datos');
    const tempJSON = JSON.parse(localStorage.getItem('Producto'));
    //console.log(tempJSON);
  })

}








const init = () => {
  

  asignarLogo(arrLogos[3]);
  const listaProductos = new ProductoList();
  listaProductos.cargarLocalStorage();
  eventos();

  
  
};

export { 
  init,
  crearProductoHTML };
