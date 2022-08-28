import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Product from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  products$ = new BehaviorSubject<Product[]>(this.products);
  constructor(private http: HttpClient) {}

  fetchProducts(): void {
    this.http.get<Product[]>('/assets/data.json').subscribe((products) => {
      this.products = products;
      this.products$.next(this.products);
    });
  }

  getProduct(id: String): Product[] {
    let p = this.products.filter((product) => product.id === id);
    return p;
  }
}
