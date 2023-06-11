// Definir una clase para representar un producto
class Producto {
    constructor(id, nombre, precio, descripcion) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
    }
  }
  
  // Definir una clase para representar el carrito de compras
  class Carrito {
    constructor() {
      this.items = [];
    }
  
    agregarProducto(producto) {
      this.items.push(producto);
    }
  
    eliminarProducto(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    calcularTotal() {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].precio;
      }
      return total;
    }
  }
  
  // Definir una clase para representar la tienda
  class Tienda {
    constructor() {
      this.productos = [];
      this.carrito = new Carrito();
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    buscarProducto(nombre) {
      const productosEncontrados = this.productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
      return productosEncontrados;
    }
  
    agregarAlCarrito(id) {
      const productoEncontrado = this.productos.find(producto => producto.id === id);
      if (productoEncontrado) {
        this.carrito.agregarProducto(productoEncontrado);
        console.log('Producto agregado al carrito: ' + productoEncontrado.nombre);
      } else {
        console.log('Producto no encontrado.');
      }
    }
  
    eliminarDelCarrito(id) {
      this.carrito.eliminarProducto(id);
      console.log('Producto eliminado del carrito.');
    }
  
    calcularTotalCarrito() {
      const total = this.carrito.calcularTotal();
      console.log('Total del carrito: $' + total.toFixed(2));
    }
  }
  
  // Crear una instancia de la tienda
  const tienda = new Tienda();
  
  // Agregar productos a la tienda
  tienda.agregarProducto(new Producto(1, 'Whisky', 2500, 'Bebida destilada de alta calidad'));
  tienda.agregarProducto(new Producto(2, 'Vino tinto', 2000, 'Vino elaborado con uvas rojas'));
  tienda.agregarProducto(new Producto(3, 'Cerveza', 1800, 'Bebida alcohólica fermentada'));
  
  // Buscar productos en la tienda
  const resultadosBusqueda = tienda.buscarProducto('vino');
  
  // Imprimir resultados de búsqueda
  console.log('Resultados de búsqueda:');
  resultadosBusqueda.forEach(producto => {
    console.log('ID: ' + producto.id);
    console.log('Nombre: ' + producto.nombre);
    console.log('Precio: $' + producto.precio);
    console.log('Descripción: ' + producto.descripcion);
    console.log('------------------------');
  });
  
  // Agregar productos al carrito
  tienda.agregarAlCarrito(1);
  tienda.agregarAlCarrito(3);
  
  // Calcular total del carrito
  tienda.calcularTotalCarrito();
  
  // Eliminar producto del carrito
  tienda.eliminarDelCarrito(1);
  
  // Calcular total del carrito nuevamente
  tienda.calcularTotalCarrito();
