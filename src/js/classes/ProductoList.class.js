import { Producto } from "./Producto.class";


export class ProductoList {


    constructor(){
        //this.productos=[];
        //comentamos el array porque cargar LS ya nos lo inicializa vacio si no hay nada
        this.cargarLocalStorage();
        //console.log(this.productos);
    }

    nuevoProducto(producto){
        
        this.productos.push(producto);
        this.guardarLocalStorage();
    }
    eliminarProducto(id){
        //regresa arreglo excluyendo el que coincide con el id
        this.productos = this.productos.filter( producto => producto.id != id );
        this.guardarLocalStorage();

    }



    guardarLocalStorage(){
        localStorage.setItem('Producto', JSON.stringify(this.productos));
    }


    cargarLocalStorage(){//problemas con el static y Producto
        this.productos=(localStorage.getItem('Producto'))?
            JSON.parse(localStorage.getItem('Producto')):[];
        
            
        //this.productos = this.productos.map( Producto.fromJson ); 
    }

    
    //btn para incrementar y decrementar
}

