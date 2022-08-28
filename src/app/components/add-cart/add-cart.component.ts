import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  productForm = new FormGroup({
    quantity: new FormControl('',[Validators.required]),
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.onAdd.emit(this.productForm.controls['quantity'].value);
    this.productForm.reset();
  }

}
