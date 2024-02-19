class ProductManager {
  constructor() {
    this.productos = [];
  }
  static id = 0;

  addProduct(title, description, price, thumbnail, stock) {
    ProductManager.id++;
    const a = {
      id: ProductManager.id,
      title,
      description,
      price,
      thumbnail,
      stock,
    };
    this.productos.push(a);
    console.log("Length: ", this.productos.length);
  }

  getProducts() {
    return this.productos;
  }

  getProductById(id) {
    if (!this.productos.find((producto) => producto.id === id)) {
      console.log("No existe");
    } else {
      console.log("Existe");
    }
  }
}

const add = new ProductManager();

add.addProduct(
  "Auriculares",
  "Hyperx Cloud Fight",
  500,
  "hhttps//image.png",
  true
);
add.addProduct("Teclado", "Logitech", 500, "hhttps//image.png2", true);
add.addProduct("Mouse", "Redragon", 500, "hhttps//image.png2", true);

console.log(add.getProducts());

add.getProductById(5)
