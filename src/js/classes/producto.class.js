const {v4: uuidv4} = require('uuid');

export class Producto {

  
  


  constructor(producto, cantidad, talla, precio) {
    this.producto = producto;
    this.id = uuidv4();//genera un hash unico
    this.cantidad = cantidad;
    this.talla = talla;
    this.precio = precio;
  }

  imprimirClase() {
    console.log(`${this.producto}, ${this.cantidad}, ${this.precio}€`);
  }


}




