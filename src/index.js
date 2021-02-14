
import { Producto } from "./js/classes/Producto.class";
import { ProductoList } from "./js/classes/ProductoList.class";
import { crearProductoHTML, init } from "./js/main";



export const productoLista = new ProductoList ();
const producto =new Producto('Vestido',2, '6 meses', 20);
const productoSinTalla =new Producto('cuna',3, '--sin talla--', 45.20);
productoLista.nuevoProducto(producto);
productoLista.nuevoProducto(productoSinTalla);
//console.log(productoLista);

init();

crearProductoHTML(producto);

crearProductoHTML(productoSinTalla);



