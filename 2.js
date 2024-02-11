let id = 0;
console.log(id);

class ProductManager {
  constructor() {
    this.productos = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    this.productos.push(
      (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.thumbnail = thumbnail),
      (this.code = code),
      (this.stock = stock)
    );
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
  (id += 1),
  true
);

console.log(add.getProducts());
console.log(add.getProductById(1));
