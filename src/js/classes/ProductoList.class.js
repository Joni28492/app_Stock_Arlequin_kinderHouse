import { Producto } from "./Producto.class";


export class ProductoList {


    constructor(){
        this.productos=[];
        //this.cargarLocalStorage();
        //console.log(this.productos);
    }

    nuevoProducto(producto){
        
        this.productos.push(producto);
        this.guardarLocalStorage();
    }
    eliminarProducto(id){
        //regresa arreglo de los que no coinciden con el id
        this.productos = this.productos.filter( producto => producto.id != id );

    }



    guardarLocalStorage(){
        localStorage.setItem('Producto', JSON.stringify(this.productos));
    }


    cargarLocalStorage(){//problemas con el static y Producto
        this.productos=(localStorage.getItem('Producto'))?
            JSON.parse(localStorage.getItem('Producto')):[];
        
        //this.productos = this.productos.map( Producto.fromJson ); 
    }


}

