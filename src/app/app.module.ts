import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCarouselModule, IgxSliderModule } from 'igniteui-angular';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    EditComponent,
    AddProductComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    IgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
