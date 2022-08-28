import Product from './product';

class CartItem extends Product {
  quantity: number;

  constructor(
    id: string,
    name: string,
    price: number,
    img: string,
    description: string,
    quantity: number
  ) {
    super(id, name, price, img, description);
    this.quantity = quantity;
  }
}

export default CartItem;
