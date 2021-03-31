import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './shopping-cart/confirmation/confirmation.component';
import { OrderDetailsComponent } from './shopping-cart/order-details/order-details.component';
import { PaymentDetailsComponent } from './shopping-cart/payment-details/payment-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserDetailsComponent } from './shopping-cart/user-details/user-details.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"shopping-cart",component:ShoppingCartComponent,children:[
    {path:"",redirectTo: '/first-component',pathMatch:"full"},
    {path:"order-details",component:OrderDetailsComponent},
    {path:"user-details",component:UserDetailsComponent},
    {path:"payment-details",component:PaymentDetailsComponent},
    {path:"confirmation",component:ConfirmationComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
