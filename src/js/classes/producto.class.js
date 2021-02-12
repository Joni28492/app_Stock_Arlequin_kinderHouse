class Producto {
  constructor(id,nombre, cantidad, precio) {
    this.id=id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  imprimirClase() {
    console.log(`${this.nombre}, ${this.cantidad}, ${this.precio}€`);
  }

  
  


}

const productoClasePrueba = new Producto("Vestido", 4, 45, 90);

export { Producto, productoClasePrueba  };
