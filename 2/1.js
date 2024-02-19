let id = 0;
class ProductManager {
  constructor() {
    this.productos = [];
  }
  addProduct(title, description, price, thumbnail, stock) {
    id += 1;
    const a = {
      id,
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
     let encontrarId = this.productos.filter((prod) => prod.id.includes(id));
     console.log(encontrarId);
     return
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

encontrarId(2)