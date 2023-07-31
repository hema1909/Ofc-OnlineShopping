import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"admin", component: AdminComponent},
  {path:"register", component: RegisterComponent},
  {path:"edit" , component: EditComponent},
  {path:"addproduct", component: AddProductComponent},
  {path:"products", component: ProductsComponent},
  {path:"cart", component: CartComponent},
  {path:"payment", component: PaymentComponent},
  {path:"thankyou", component: ThankyouComponent},
  {path:"order", component: OrderComponent},
  {path:"**", redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
