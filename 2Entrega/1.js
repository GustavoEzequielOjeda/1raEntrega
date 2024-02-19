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
    console.log("Productos creados:", this.productos.length);
  }

  getProducts() {
    return this.productos;
  }

  getProductById(id) {
    let encontrarId = this.productos.find((prod) => prod.id === id);
    if (!encontrarId) {
      console.log("No existe");
      return;
    } else {
      console.log(encontrarId);
    }
  }

  updateProduct(id, title, description, price, thumbnail, stock) {
    let encontrarId = this.productos.find((prod) => prod.id === id);
    if (!encontrarId) {
      console.log("No existe");
      return;
    } else {
      encontrarId = {
        id,
        title,
        description,
        price,
        thumbnail,
        stock,
      };
      console.log(encontrarId);
    }
  }

  deleteProduct(id) {
    let encontrarId = this.productos.find((prod) => prod.id === id);
    if (!encontrarId) {
      console.log("No existe");
      return;
    }
    let borrar = this.productos.indexOf(encontrarId);
    delete this.productos[borrar];
  }
}

const add = new ProductManager();

//ADD PRODUCT
add.addProduct(
  "Auriculares",
  "Hyperx Cloud Fight",
  500,
  "hhttps//image.png",
  true
);
add.addProduct("Teclado", "Logitech", 500, "hhttps//image.png2", true);
add.addProduct("Mouse", "Redragon", 500, "hhttps//image.png3", true);
add.addProduct("Parlantes", "Noga", 500, "hhttps//image.png4", true);

//GET PRODUCTS
console.log(add.getProducts());

//GET PRODUCTS BY ID
add.getProductById(2);

//UPDATE PRODUCTS
add.updateProduct(3, "Monitor", "Samsung", 500, "hhttps//image.png3", true);

//DELETE PRODUCTS
add.deleteProduct(10);

//GET PRODUCTS
console.log(add.getProducts());
