import { Component, Input, OnInit } from '@angular/core';
import CartItem from 'src/app/models/cart-item';
import Product from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  index: number = 0;
  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.index = Number(this.product.id); 
  }
  addToCart(quantity: number): void {
    let item: CartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      img: this.product.img,
      quantity: quantity,
      description: this.product.description
    };
    this.cartService.addToCart(item);
  }
}
