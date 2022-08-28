import { Component,AfterContentChecked, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import CartItem from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit, AfterContentChecked {
  items: CartItem[] = [];
  totalCost: number = 0;
  exist: boolean = false;
  user: any = {
    name: '',
    cost: 0,
  };
  quantity: number = -1;
  // quantityForm = new FormGroup({
  //   quantity: new FormControl(0, [Validators.required]),
  // });
  success: boolean = false;
  paymentForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    creditCard: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern('[0-9]*'),
    ]),
  });
  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.items = this.cartService.carttedItems;
    this.cdr.detectChanges();
    this.totalCost = this.cartService.getTotalCost(this.items);
    this.exist = this.items.length === 0 ? false : true;
  }

  onSubmit(): void {
    this.user.name = this.paymentForm.controls['fullName'].value;
    this.user.cost = this.totalCost;
    this.success = true;
    this.cartService.carttedItems = [];
  }

  onChange(id: string, quantity:number): void {
    this.quantity = quantity;
    console.log(`q: ${this.quantity}`);
    this.cartService.changeQuantity(id,this.quantity);
    if (quantity === 1) {
      this.items = this.cartService.removeFromCart(id);
      this.totalCost = 0;
    }
  }
}
