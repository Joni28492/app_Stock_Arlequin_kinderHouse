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
const titulo = document.querySelector('h1');

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
                    (talla=="4") ? "2 años":
                    (talla=="5") ? "3 años":
                    (talla=="6") ? "4 años":
                    (talla=="7") ? "5 años":                    
                    (talla=="8") ? "6 años":"--sin talla--";

  return tallaTemp;
}

const crearProductoHTML = (producto) =>{

  if (producto.cantidad != 0) {
    
    const htmlProducto = `
      <li class="w-25">${producto.producto}</li>
      <li class="w-25 ">
        <button class="derecease btn btn-danger fw-bolder">-</button>
        <span>${producto.cantidad}</span>
        <button  class="increase btn btn-success fw-bolder">+</button>
      </li>
      <li class="w-25 ${(producto.talla === '--sin talla--') ? 'text-danger':''}">${selectOption(producto.talla)}</li>
      <li class="w-25">${producto.precio} €</li>
      <button  class="eliminarProducto btn btn-danger fw-bolder">X</button>
    `;

    const ul = document.createElement('ul');
    ul.classList='list-group list-group-horizontal container list-unstyled m-2';
    ul.id=producto.id;
    ul.innerHTML= htmlProducto;

    ulListaProducto.append(ul);
    
    return ul;
  }
  
  
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
    //validamos que no este vacio, hay que parsearlo porque el input lo trae como string
    if(nombre!=='' && !(cantidad<=0) && !(precio<=0) && Number.isInteger(parseInt(cantidad))){
      
      const nuevoProducto = new Producto(nombre, cantidad, talla, precio);
      productoLista.nuevoProducto(nuevoProducto);
      crearProductoHTML(nuevoProducto);
      
      inputNombre.value='';
      inputCantidad.value='';
      inputPrecio.value='';
      
    }else{//posiobilidad de convertir a promise
      
      const alerta=document.createElement('div');
      alerta.classList='alert fw-bold bg-warning text-danger container rounded rounded-pill shadow fs-3  mt-4  border border-danger border-5';
      alerta.textContent='Te faltan campos por rellenar o los datos introducidos no son correctos';

      titulo.append(alerta);
      
      setTimeout(() => {
        alerta.remove();
      }, 3000);
      

      

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
    //btn decrementar :: listo
    if(e.target.classList == 'derecease btn btn-danger fw-bolder'){
      const id = e.target.parentNode.parentNode.id;
      const ulParent = e.target.parentNode.parentNode;
      const contenedorElemento =e.target.nextElementSibling;
      productoLista.decrementar(id, ulParent);

      contenedorElemento.textContent = parseInt(contenedorElemento.textContent)-1;
      if (contenedorElemento.textContent == 0) {productoLista.eliminarProducto(id);}
      
    }

    //btn incrementar::listo
    if (e.target.classList == 'increase btn btn-success fw-bolder') {
      const id = e.target.parentNode.parentNode.id;
      const contenedorElemento = e.target.previousElementSibling;
      //console.log(contenedorElemento);
      productoLista.incrementar(id);
      contenedorElemento.textContent = parseInt(contenedorElemento.textContent)+1;
      //console.log('btn incrementar');
    }

  });



  ////  ESTOS NO SE SI FUNCIONARAN
  const parent = btnCargarJson.parentNode;
  const hr = document.createElement('hr');
  //BTN CARGAR Y DESCARGAR JSON
  btnCargarJson.addEventListener('click', (e)=>{
    
    btnCargarJson.disabled=true;
    const div = document.createElement('div');
    const btnActualizar = document.createElement('button');
    const textArea = document.createElement('textarea');
    div.classList="container text-center fs-3 p-2";
    div.innerHTML='<strong>Recuerda que el formato ha de ser válido</strong>';
   
    btnActualizar.textContent = 'Guardar'
    btnActualizar.classList='col btn btn-info fw-bolder text-white  m-2';
    textArea.placeholder = 'Intrduce aquí el contenido del archivo .json que has descargado de esta app y actualiza';
    parent.append(div, hr, textArea, btnActualizar);

    btnActualizar.addEventListener('click', () =>{
      //si no controlamos que este vacio se borrara todo
      if(textArea.value !== '') localStorage.setItem('Producto', textArea.value);
      
    });

  });


  btnDescargarJson.addEventListener('click', ()=>{
   
    const tempJSON = JSON.parse(localStorage.getItem('Producto'));
    const div = document.createElement('div');
 
    const inst = document.createElement('small');
    inst.textContent='Guarda el párrafo en un archivo.json para conservar tus datos, actualiza para limpiar ';
    inst.classList='text-center';
    const p =document.createElement('pre');
    p.textContent=JSON.stringify(tempJSON, null, 3);
    div.classList="container text-center fs-3";
    div.innerHTML='<strong>copia el siguiente párrafo</strong>';
    parent.append(div, hr,inst,hr,p);
    btnDescargarJson.disabled = true;
    
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
