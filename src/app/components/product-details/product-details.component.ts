import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import CartItem from 'src/app/models/cart-item';
import Product from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product !: Product;
  productList: Product[] = [];
  subscription: Subscription;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.subscription = this.productService.products$.subscribe(products => {
      this.productList = products;
    });
    this.productService.fetchProducts();
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(`id: ${id}`);
    let array = this.productService.getProduct(id);
    this.product = array[0];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  addToCart(quantity: number): void {
    let item: CartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      img: this.product.img,
      quantity: quantity,
      description: this.product.description,
    };
    this.cartService.addToCart(item);
  }
}
