let id = 0;
console.log(id);

class ProductManager {
  products(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
  getProducts(){}
  
  getProductById(){

  }
}
let producto1 = new ProductManager(
  "Auriculares",
  "Hyperx Cloud Fight",
  1000,
  "hhttps//image.png",
  (id += 1),
  true
);
console.log(ProductManager);
console.log(id);
