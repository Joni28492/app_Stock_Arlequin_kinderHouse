

 class ProductoList {


    static cargarLocalStorage(){

        listadoProductos = JSON.parse(localStorage.getItem('Producto'));
        console.log(listadoProductos);
    }


}