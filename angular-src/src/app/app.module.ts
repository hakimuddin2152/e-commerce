
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CdkTableModule} from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminOrdersComponent } from 'app/components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from 'app/components/admin/admin-products/admin-products.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
import { CategoryListComponent } from './components/shared/category-list/category-list.component';
import {ProductFilterComponent} from 'app/components/products/product-filter/product-filter.component'
import { ProductCardComponent } from 'app/components/product-card/product-card.component';


import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from 'app/components/products/products.component';
import { ProductService } from 'app/services/product.service';
import { CategoryService } from 'app/services/category.service';


@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class AngularMaterialModule {}
const appRoutes: Routes =  [
  {path:'', component: ProductsComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'products/:category', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'admin',component:AdminHomeComponent},
  {path:'admin/manage-products', component:AdminProductsComponent},
  {path:'admin/manage-category',component:AdminCategoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    AdminCategoryComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ProductsComponent,
    ProductFilterComponent,
    ProductCardComponent,
    AdminHomeComponent,
    AdminCategoryComponent,
    CategoryListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    AngularMaterialModule,
    CdkTableModule
  ],
  providers: [ValidateService, AuthService, AuthGuard,ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
