import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from 'app/components/products/products.component';
import {ProductFilterComponent} from 'app/components/products/product-filter/product-filter.component'
import { ProductCardComponent } from 'app/components/product-card/product-card.component';
import { ProductService } from 'app/services/product.service';
import { CategoryService } from 'app/services/category.service';
import { AdminOrdersComponent } from 'app/components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from 'app/components/admin/admin-products/admin-products.component';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'products/:category', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'admin/products', component:AdminProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ProductsComponent,
    ProductFilterComponent,
    ProductCardComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard,ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
