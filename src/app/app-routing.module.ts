import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './cart/confirmation/confirmation.component';
import { OrderDetailsComponent } from './cart/order-details/order-details.component';
import { PaymentDetailsComponent } from './cart/payment-details/payment-details.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { UserDetailsComponent } from './cart/user-details/user-details.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"cart",component:ShoppingCartComponent,children:[
    {path:"",redirectTo: '/first-component',pathMatch:"full"},
    {path:"order-details",component:OrderDetailsComponent},
    {path:"user-details",component:UserDetailsComponent},
    {path:"payment-details",component:PaymentDetailsComponent},
    {path:"confirmation/:id",component:ConfirmationComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
