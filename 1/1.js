let id= 0
class ProductManager {
  constructor() {
    this.productos = [];
  }

  addProduct(title, description, price, thumbnail, stock){
    
      this.productos.push([
      (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.thumbnail = thumbnail),
      (this.code = id+=1),
      (this.stock = stock)
      ]);
  }

  getProducts() {
    return this.productos;
  }

  getProductById(id) {
    let buscarId = this.productos.find((producto) => producto.code === id);
    if (!buscarId) {
      console.log(`No existe usuarios con ID : ${id}`);
      return;
    }
    return buscarId;
  }
}

const add = new ProductManager();

add.addProduct(
  "Auriculares",
  "Hyperx Cloud Fight",
  1000,
  "hhttps//image.png",
  true
);

add.addProduct(
  "Teclado",
  "Logitech",
  500,
  "hhttps//image.png2",
  true
);

add.addProduct(
  "Mouse",
  "Redragon",
  500,
  "hhttps//image.png2",
  true
  );

console.log(add.getProducts());
console.log(add.getProductById(4));
