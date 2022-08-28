import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ConfirmPageComponent } from './components/confirm-page/confirm-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/prodcuts', pathMatch: 'full'},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'cart',component:CartListComponent},
  {path: 'confirm',component:ConfirmPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
