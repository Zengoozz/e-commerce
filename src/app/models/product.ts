class Product {
    id: string;
    name: string;
    price: number;
    img: string;
    description: string;
  
    constructor(
      id: string,
      name: string,
      price: number,
      img: string,
      description: string
    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.img = img;
      this.description = description;
    }
  }
  export default Product;
  