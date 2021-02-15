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

//prueba botones
const listaProductosUl =document.querySelector('#listaProductos');

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

const selectOption = (talla) =>{

  const tallaTemp = (talla=="1") ? "3 meses":
                    (talla=="2") ? "6 meses": 
                    (talla=="3") ? "1 año":
                    (talla=="4") ? "18 meses":"--sin talla--";

  return tallaTemp;
}

const crearProductoHTML = (producto) =>{

   

    const htmlProducto = `
      <li class="w-25">${producto.producto}</li>
      <li class="w-25 ">
        <button class="derecease btn btn-danger fw-bolder">-</button>
        ${producto.cantidad}
        <button  class="increase btn btn-success fw-bolder">+</button>
      </li>
      <li class="w-25 ${(producto.talla === '--sin talla--') ? 'text-danger':''}">${selectOption(producto.talla)}</li>
      <li class="w-25">${producto.precio} €</li>
      <button  class="eliminarProducto btn btn-danger fw-bolder">X</button>
    `;//arreglar tallas

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



  ///botones que se añaden se utilizan en funcion del target del ul
  listaProductosUl.addEventListener('click', (e)=>{
    //btn eliminar
    if(e.target.classList =='eliminarProducto btn btn-danger fw-bolder'){
      const id = e.target.parentNode.id;
      const parent = e.target.parentNode;
      //eliminamos producto del LS
      productoLista.eliminarProducto(id);
      //borramos el elemento
      parent.remove();
      
    }
    //btn decrementar
    if(e.target.classList == 'derecease btn btn-danger fw-bolder'){
      console.log('btn decrementar');
    }

    //btn incrementar
    if (e.target.classList == 'increase btn btn-success fw-bolder') {
      console.log('btn incrementar');
    }

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
