import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{
  productList: Product[] = [];
  subscription: Subscription;
  nav: boolean = false;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.products$.subscribe(products => {
      this.productList = products;
    });
    this.productService.fetchProducts();
  }

  ngOnInit():void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
