webpackJsonp(["main"],{

/***/ "../../../../../../config/database.js":
/***/ (function(module, exports) {

module.exports = {
  // configure the code below with your username, password and mlab database information
  database: 'mongodb://hakim:hakim123@ds145208.mlab.com:45208/productdb-shoppingmart',
  //mongodb://<dbuser>:<dbpassword>@ds145208.mlab.com:45208/productdb-shoppingmart
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: 'yoursecret',
  domain:'http://localhost:8080/'
  //domain:''
}


/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../bootstrap/dist/css/bootstrap.css"), "");

// module
exports.push([module.i, ".container{\r\n    padding-top: 70px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AngularMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_components_admin_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_components_admin_admin_products_admin_products_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_home_admin_home_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_category_admin_category_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-category/admin-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_shared_category_list_category_list_component__ = __webpack_require__("../../../../../src/app/components/shared/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_components_products_product_filter_product_filter_component__ = __webpack_require__("../../../../../src/app/components/products/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_components_product_card_product_card_component__ = __webpack_require__("../../../../../src/app/components/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_components_products_products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["H" /* MatTooltipModule */],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_27_app_components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'products/:category', component: __WEBPACK_IMPORTED_MODULE_27_app_components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_27_app_components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */] },
    { path: 'admin/manage-products', component: __WEBPACK_IMPORTED_MODULE_17_app_components_admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */] },
    { path: 'admin/manage-category', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_category_admin_category_component__["a" /* AdminCategoryComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16_app_components_admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_17_app_components_admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_category_admin_category_component__["a" /* AdminCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_27_app_components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_21_app_components_products_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_22_app_components_product_card_product_card_component__["a" /* ProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_category_admin_category_component__["a" /* AdminCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_shared_category_list_category_list_component__["a" /* CategoryListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_25_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                AngularMaterialModule,
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["m" /* CdkTableModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_24__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_28_app_services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_29_app_services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_0__services_location_service__["a" /* LocationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin-category/admin-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  .mat-header-cell.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n  .nav-link{\r\n    margin:15px;\r\n    background-color: #ffeb3b52;\r\n    cursor: pointer;\r\n    color: purple !important;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-category/admin-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <a class=\"nav-link list-group-item\" (click)=\"showForm()\" [style.display]=\"!isShowForm ?'block':'none'\">Add new Category</a>\r\n</div>\r\n<div class=\"row\">\r\n    <div *ngIf=\"isShowForm\" class=\"col-6\">\r\n        <form #f=\"ngForm\" (ngSubmit)=\"saveCategory(f.value)\">\r\n            <div class=\"form-group\">\r\n              <label for=\"key\">Key</label>\r\n              <input type=\"text\" [(ngModel)]=\"category.key\"  \r\n              class=\"form-control\" id=\"key\" name=\"category.key\" aria-describedby=\"title\" \r\n              placeholder=\"Enter Category Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"title\">Title</label>\r\n                <input type=\"text\" [(ngModel)]=\"category.title\" name=\"category.title\" rows=\"4\" \r\n                class=\"form-control\" id=\"title\" aria-describedby=\"Description\" \r\n                placeholder=\"Enter Description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"category\">Is Category a featured category?</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"category.featured\" name=\"category.featured\" id=\"featured\">\r\n                  <option  value=\"true\">True</option>\r\n                  <option  value=\"false\">False</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"imageUrl\">Category Image</label>\r\n                <input type=\"text\" [(ngModel)]=\"category.imageUrl\" name=\"category.imageUrl\" rows=\"4\" \r\n                class=\"form-control\" id=\"imageUrl\" aria-describedby=\"Description\" \r\n                placeholder=\"Enter Category Image URL\">\r\n              </div>\r\n    \r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"form-control offset-2 col-6 btn btn-primary\">Save Changes</button>\r\n              </div>\r\n              \r\n    \r\n          </form>\r\n    \r\n    \r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n        <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n      \r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n      \r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"key\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Key </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.key}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <!-- Title Column -->\r\n          <ng-container matColumnDef=\"title\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <!-- Featured Column -->\r\n          <ng-container matColumnDef=\"Featured\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Featured </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.featured}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <!--Image Url Column -->\r\n          <ng-container matColumnDef=\"imageUrl\">\r\n            <mat-header-cell *matHeaderCellDef> Image Url </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" > {{element.imageUrl}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Update\">\r\n            <mat-header-cell *matHeaderCellDef> Edit </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <a (click)=\"showForm(element)\" class=\"nav-link\" >Edit</a>  </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Delete\">\r\n            <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <a (click)=\"deleteCategory(element._id)\" class=\"nav-link\" >Delete</a>  </mat-cell>\r\n          </ng-container>\r\n      \r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator #paginator\r\n                 [pageSize]=\"10\"\r\n                 [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n      </div>\r\n\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <a class=\"col-6\" id=\"addCategory\" (click)=\"showForm($event)\">Add new Category</a>\r\n        <a class=\"col-6\" id=\"updateCategory\" (click)=\"showForm($event)\" >Update the existing category</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-12\">\r\n    <div *ngIf=\"showAddCategoryForm\" >\r\n    <form #f=\"ngForm\" (ngSubmit)=\"saveCategory(f.value)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"key\">Key</label>\r\n          <input type=\"text\" [(ngModel)]=\"key\" name=\"key\" \r\n          class=\"form-control\" id=\"key\" name=\"key\" aria-describedby=\"title\" \r\n          placeholder=\"Enter Category Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"title\">Title</label>\r\n            <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" rows=\"4\" \r\n            class=\"form-control\" id=\"title\" aria-describedby=\"Description\" \r\n            placeholder=\"Enter Description\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"category\">Is Category a featured category?</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"featured\" name=\"featured\" id=\"featured\">\r\n              <option  value=\"true\">True</option>\r\n              <option  value=\"false\">False</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"imageUrl\">Category Image</label>\r\n            <input type=\"text\" [(ngModel)]=\"imageUrl\" name=\"imageUrl\" rows=\"4\" \r\n            class=\"form-control\" id=\"imageUrl\" aria-describedby=\"Description\" \r\n            placeholder=\"Enter Category Image URL\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      </form>\r\n    </div>\r\n    <div *ngIf=\"showUpdateCategoryForm\">\r\n        <div class=\"form-group\">\r\n            \r\n            <category-list></category-list>\r\n        \r\n        </div>   \r\n        \r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-category/admin-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminCategoryComponent = (function () {
    function AdminCategoryComponent(categoryService, routerService) {
        var _this = this;
        this.categoryService = categoryService;
        this.routerService = routerService;
        // tableResource: DataTableResource<Category>;
        // items: Category[] = [];
        // itemCount: number;
        this.displayedColumns = ['key', 'title', 'Featured', 'imageUrl', 'Update', 'Delete'];
        this.isShowForm = false;
        this.subscription = this.categoryService.getAll()
            .subscribe(function (categoryList) {
            _this.categories = categoryList;
            _this.initializeTable(_this.categories);
        });
    }
    AdminCategoryComponent.prototype.ngOnInit = function () {
    };
    AdminCategoryComponent.prototype.initializeTable = function (categories) {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableDataSource */](categories);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    AdminCategoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminCategoryComponent.prototype.showForm = function (element) {
        if (element == undefined) {
            this.category = {
                _id: '',
                key: '',
                title: '',
                featured: '',
                imageUrl: ''
            };
            console.log(this.category);
        }
        else {
            this.category = {
                _id: element._id,
                key: element.key,
                title: element.title,
                featured: element.featured,
                imageUrl: element.imageUrl
            };
        }
        // }
        console.log(element);
        this.isShowForm = !this.isShowForm;
    };
    AdminCategoryComponent.prototype.saveCategory = function (a) {
        var _this = this;
        this.isShowForm = false;
        console.log(a);
        console.log(this.category);
        this.categoryService.saveCategory(this.category).subscribe(function (data) {
            console.log('category saved successfully !!!!!');
            if (data) {
                console.log(data);
                _this.initializeTable(_this.categories);
            }
        });
    };
    AdminCategoryComponent.prototype.deleteCategory = function (categoryId) {
        var _this = this;
        if (confirm('Do you really want to delete this category')) {
            this.categoryService.deleteCategory(categoryId).subscribe(function (data) {
                _this.routerService.navigate(['/admin/manage-category']);
                if (data) {
                    console.log(data);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */])
    ], AdminCategoryComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */])
    ], AdminCategoryComponent.prototype, "paginator", void 0);
    AdminCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-admin-category',
            template: __webpack_require__("../../../../../src/app/components/admin/admin-category/admin-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin-category/admin-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AdminCategoryComponent);
    return AdminCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin-home/admin-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover{\r\n    cursor: pointer\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-home/admin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <ul class=\"list-group\">\n      <li  class=\"list-group-item\">\n          <!-- <li class=\"nav-item\"> -->\n          <a routerLink=\"manage-products\" class=\"nav-link\" id=\"productLink\" >Manage Product</a>\n        </li>\n\n      <li  class=\"list-group-item\">\n        <!-- <li class=\"nav-item\"> -->\n        <a routerLink=\"manage-category\" class=\"nav-link\" id=\"categoryLink\" >Manage Category</a>\n        \n      </li>\n             </ul>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-home/admin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__("../../../../../src/app/components/admin/admin-home/admin-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin-orders/admin-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminOrdersComponent = (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__("../../../../../src/app/components/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin-products/admin-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-products/admin-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <a class=\"nav-link list-group-item\" (click)=\"showForm()\" \n  [style.display]=\"!isShowForm ?'block':'none'\">Add new Product</a>\n</div>\n<div class=\"row\">\n    <div *ngIf=\"isShowForm\" class=\"col-6\">\n        <form #f=\"ngForm\" (ngSubmit)=\"saveCategory(f.value)\">\n            <div class=\"form-group\">\n              <label for=\"key\">Title</label>\n              <input type=\"text\" [(ngModel)]=\"product.title\"  \n              class=\"form-control\" id=\"title\" name=\"product.title\" aria-describedby=\"title\" \n              placeholder=\"Enter Product Name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"title\">Description</label>\n                <input type=\"text\" [(ngModel)]=\"product.description\" name=\"product.description\" rows=\"4\" \n                class=\"form-control\" id=\"description\" aria-describedby=\"Description\" \n                placeholder=\"Enter Description\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"category\">Price</label>\n                <input type=\"text\" [(ngModel)]=\"product.price\" name=\"product.price\" rows=\"4\" \n                class=\"form-control\" id=\"price\" aria-describedby=\"Price\" \n                placeholder=\"Enter price\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"category\">Category</label>\n                <input type=\"text\" [(ngModel)]=\"product.category\" name=\"product.category\" rows=\"4\" \n                class=\"form-control\" id=\"category\" aria-describedby=\"category\" \n                placeholder=\"Enter category\">\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"imageUrl\">Image</label>\n                <input type=\"text\" [(ngModel)]=\"product.imageUrl\" name=\"product.imageUrl\" rows=\"4\" \n                class=\"form-control\" id=\"imageUrl\" aria-describedby=\"Image Name\" \n                placeholder=\"Enter Image name\">\n              </div>\n    \n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"form-control offset-2 col-6 btn btn-primary\">Save Changes</button>\n              </div>\n              \n    \n          </form>\n    \n    \n    </div>\n    \n</div>\n\n\n<div class=\"example-container mat-elevation-z8\">\n        <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n      \n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n      \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"key\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Sno </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">1 </mat-cell>\n          </ng-container>\n      \n          <!-- Title Column -->\n          <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Product Title </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n          </ng-container>\n      \n          <!-- Featured Column -->\n          <ng-container matColumnDef=\"price\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"Update\">\n            <mat-header-cell *matHeaderCellDef> Edit </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a (click)=\"showForm(element)\" class=\"nav-link\" >Edit</a>  </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Delete\">\n            <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a (click)=\"deleteCategory(element._id)\" class=\"nav-link\" >Delete</a>  </mat-cell>\n          </ng-container>\n      \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 20]\"\n                 [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-products/admin-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminProductsComponent = (function () {
    function AdminProductsComponent(productService, routerService) {
        var _this = this;
        this.productService = productService;
        this.routerService = routerService;
        // tableResource: DataTableResource<Category>;
        // items: Category[] = [];
        // itemCount: number;
        this.displayedColumns = ['key', 'title', 'price', 'Update', 'Delete'];
        this.isShowForm = false;
        this.subscription = this.productService.getAll()
            .subscribe(function (productList) {
            _this.products = productList;
            _this.initializeTable(_this.products);
        });
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.initializeTable = function (products) {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableDataSource */](products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    AdminProductsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminProductsComponent.prototype.showForm = function (element) {
        if (element == undefined) {
            this.product = {
                _id: '',
                title: '',
                description: '',
                price: 0,
                category: '',
                imageUrl: ''
            };
            console.log(this.product);
        }
        else {
            this.product = {
                _id: element._id,
                description: element.description,
                title: element.title,
                price: element.price,
                category: element.category,
                imageUrl: element.imageUrl
            };
        }
        // }
        console.log(element);
        this.isShowForm = !this.isShowForm;
    };
    AdminProductsComponent.prototype.saveCategory = function (a) {
        var _this = this;
        this.isShowForm = false;
        console.log(a);
        console.log(this.product);
        this.productService.saveProduct(this.product).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.initializeTable(_this.products);
            }
        });
    };
    AdminProductsComponent.prototype.deleteCategory = function (productId) {
        if (confirm('Do you really want to delete this category')) {
            this.productService.deleteProduct(productId).subscribe(function (data) {
                if (data) {
                    console.log(data);
                }
                // })
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */])
    ], AdminProductsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */])
    ], AdminProductsComponent.prototype, "paginator", void 0);
    AdminProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__("../../../../../src/app/components/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n        <label for=\"Password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link{\r\n    font-size:18px;\r\n}\r\n/* .fixed-top{\r\n    height: 70px;\r\n} */\r\n.bg-light{\r\n    background-color: #6a1f77 !important \r\n}\r\n.navbar-light .navbar-nav .nav-link{\r\n    color:rgba(255, 193, 59, 0.91)\r\n}\r\n.navbar-light .navbar-toggler-icon{\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'><path stroke='rgba(251, 193, 59, 0.91)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='20' d='M4 7h22M4 15h22M4 23h22'/></svg>\")\r\n}\r\n\r\nspan{\r\n    color:white\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../../../assets/img/logo.jpg\" \n      style=\"width:72px; height: 53px;\" title=\"logo\" ></a>\n      \n      <div class=\"\">\n      <span>{{userLocation[0].extra.premise}} , {{ userLocation[0].city}}</span>\n            <div class=\"btn-group\">\n              <a class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <img src=\"../../../assets/img/my-account.png\" style=\"height:40px;width:40px;\">\n              </a>\n             <div class=\"dropdown-menu\">\n               <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n               <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n             </div>\n            </div> <a class=\"\" routerLink=\"/\">\n              <img src=\"../../../assets/img/shopping-cart-logo.png\" style=\"height:40px;width:40px;\">\n              <span>1</span>\n          </a>\n          \n    </div>\n  \n   \n      </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, location, flashMessage) {
        // navigator.geolocation.getCurrentPosition(function(a){
        //   if(confirm('This site wants your location')){
        //     this.location.getLocation(a)
        //   }
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.flashMessage = flashMessage;
        this.cordinates = {
            "latitude": '18.6004461',
            "longitude": '73.8231716'
        };
        // })
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.getLocation(this.cordinates).subscribe(function (data) {
            _this.userLocation = data;
            console.log(_this.userLocation[0].extra.premise, ',', _this.userLocation[0].city);
        });
    };
    NavbarComponent.prototype.callLocation = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/product-card/product-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card { \n  margin-bottom: 30px;\n}\n\n.card-footer {\n  padding: 0;\n}\n.productImage{\n  width: 100%;\n  height: 250px;\n}\n@media (max-width:480px){\n  .productImage {\n    max-width: 100%;\n    height: 200px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n    <img *ngIf=\"product.imageUrl\" class=\"card-img-top productImage\" \n    [src]=\"relativePath+product.imageUrl\" alt=\"{{ product.title }}\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{ product.title }}</h4>\n      <p class=\"card-text\">{{ product.price | currency:'RS':true }}</p>\n      <p class=\"card-text\">{{product.description}}</p>\n      <button class=\"btn-primary\">Add to Cart</button>\n    </div>\n\n    <div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n      \n        \n      <button \n        *ngIf=\"shoppingCart.getQuantity(product) === 0; else updateQuantity\"\n        (click)=\"addToCart()\"\n        class=\"btn btn-secondary btn-block\">Add to Cart</button>\n      <ng-template #updateQuantity>\n        \n        <!-- <product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\">\n        </product-quantity> -->\n      </ng-template>\n    </div>\n  </div>    \n  "

/***/ }),

/***/ "../../../../../src/app/components/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_shopping_cart__ = __webpack_require__("../../../../../src/app/model/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCardComponent = (function () {
    function ProductCardComponent() {
        this.showActions = true;
        this.relativePath = './../../../../assets/img/';
    }
    ProductCardComponent.prototype.addToCart = function () {
        //  this.cartService.addToCart(this.product);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('show-actions'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('shopping-cart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__model_shopping_cart__["a" /* ShoppingCart */])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'product-card',
            template: __webpack_require__("../../../../../src/app/components/product-card/product-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product-filter/product-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sticky-top { \n  top: 80px;\n  \n}\n.product-filter {\n  padding-top: 20px;\n}\n\n/* Shrinking the sidebar from 250px to 80px and center aligining its content*/\n#sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center;\n}\n\n/* Toggling the sidebar header content, hide the big heading [h3] and showing the small heading [strong] and vice versa*/\n#sidebar .sidebar-header strong {\n  display: none;\n}\n#sidebar.active .sidebar-header h3 {\n  display: none;\n}\n#sidebar.active .sidebar-header strong {\n  display: block;\n}\n\n#sidebar ul li a {\n  text-align: left;\n}\n\n#sidebar.active ul li a {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em;\n}\n\n#sidebar.active ul li a i {\n  margin-right:  0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px;\n}\n\n/* Same dropdown links padding*/\n#sidebar.active ul ul a {\n  padding: 10px !important;\n}\n\n/* Changing the arrow position to bottom center position, \n translateX(50%) works with right: 50% \n to accurately  center the arrow */\n#sidebar.active a[aria-expanded=\"false\"]::before, #sidebar.active a[aria-expanded=\"true\"]::before {\n  top: auto;\n  bottom: 5px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-none d-md-block\">\n  <div class=\"sticky-top\">\n    <div class=\"list-group\">\n        <a\n          class=\"list-group-item list-group-item-action\"\n          routerLink=\"/products\"\n          >All Categories</a>\n          \n        <a \n          *ngFor=\"let c of categories$ | async\" \n          [routerLink]=\"['/products/',c.key]\"\n          class=\"list-group-item list-group-item-action\"\n          [routerLinkActive]=\"'active'\"\n          >\n          {{ c.title }}\n        </a>\n      </div>\n  </div>\n</div>\n  \n\n<div class=\"d-block d-sm-none\">\n  <div ngbDropdown class=\"dropdown product-filter\">\n    <button ngbDropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\" \n    id=\"dropdownMenuButton\" data-toggle=\"dropdown\" >\n     Category\n    </button>\n    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a \n      *ngFor=\"let c of categories$ | async\" \n      [routerLink]=\"['/products/',c.key]\"\n      class=\"list-group-item list-group-item-action\"\n      [routerLinkActive]=\"'active'\"\n      >\n      {{ c.title }}\n    </a>\n    </div>\n  </div>\n\n  <br>\n<br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__("../../../../../src/app/components/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_category_service__["a" /* CategoryService */]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    color:green\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-3 col-12\">\n    <product-filter></product-filter>\n  </div>\n  <div class=\"col-md-offset-1 col-md-9 col-12\">\n      <div class=\"row\">\n          <ng-container *ngFor=\"let p of products|async\">\n      \n              <div class=\"col-6 col-md-4\">\n                \n              <product-card [product]=\"p\"></product-card>\n            </div>\n            \n          </ng-container>\n        </div>\n        \n        <app-admin-orders></app-admin-orders>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = (function () {
    function ProductsComponent(route, productService, categoryService) {
        this.route = route;
        this.productService = productService;
        this.categoryService = categoryService;
        this.filteredProducts = [];
        //this.categories$=categoryService.getAll();
        //this.products=this.productService.getAll();
        //console.log(this.products)
    }
    // async ngOnInit() {
    //   this.cart$ = await this.shoppingCartService.getCart();
    //   this.populateProducts();
    // }
    ProductsComponent.prototype.populateProducts = function () {
        this.products = this.productService.getAll();
        // .map(products => {
        //   this.products = products;
        //   return this.route.queryParamMap;
        // })
        // .subscribe(params => {
        //   this.category = params.get('category');
        //   this.applyFilter();      
        // });
    };
    ProductsComponent.prototype.applyFilter = function () {
        //  this.filteredProducts = (this.category) ? 
        //this.products.filter(p => p.category === this.category) : 
        // this.products;
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this.route.paramMap');
        this.products = this.route.paramMap.switchMap(function (params) {
            if (params.get('category') == undefined)
                return _this.productService.getProductByCategory('perfume');
            else
                return _this.productService.getProductByCategory(params.get('category'));
        });
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/components/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4_app_services_category_service__["a" /* CategoryService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" \n    class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else if (data.msg == "exists") {
                _this.flashMessage.show('This user already exists please try registering with some different user id', { cssClass: 'alert-danger', timeout: 8000 });
                _this.router.navigate(['/register']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<select class=\"form-control\" name=\"category\" id=\"category\">\n    <option *ngFor=\"let c of categories$ | async\"  [value]=\"c.key\">{{c.title }}</option>\n  </select>"

/***/ }),

/***/ "../../../../../src/app/components/shared/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = (function () {
    function CategoryListComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    CategoryListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('category'),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "category", void 0);
    CategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'category-list',
            template: __webpack_require__("../../../../../src/app/components/shared/category-list/category-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_app_services_category_service__["a" /* CategoryService */]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/model/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = (function () {
    function ShoppingCart() {
    }
    return ShoppingCart;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //this.isDev = true;  // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var config = __webpack_require__("../../../../../../config/database.js");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.domain = config.domain;
    }
    CategoryService.prototype.getAll = function () {
        var url = this.domain + "category/getallcategories";
        //return this.db.list('/categories',).valueChanges();
        return this.http.get(url)
            .map(function (response) {
            var categories = response.json();
            return categories;
        });
    };
    CategoryService.prototype.saveCategory = function (category) {
        console.log(category);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "category/addcategory";
        return this.http.post(url, category, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.deleteCategory = function (categoryKey) {
        console.log(categoryKey);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "category/deletecategory/" + categoryKey;
        return this.http.delete(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var config = __webpack_require__("../../../../../../config/database.js");
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.domain = config.domain;
        this.url = this.domain + "location/getlocation";
    }
    LocationService.prototype.getLocation = function (cordinates) {
        console.log('location service called successfully');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url, cordinates, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LocationService.prototype, "userLocation", void 0);
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var config = __webpack_require__("../../../../../../config/database.js");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.domain = config.domain;
    }
    ProductService.prototype.getCategories = function () {
        //return this.db.list('/categories').valueChanges();
        return null;
    };
    ProductService.prototype.saveProduct = function (product) {
        console.log(product);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "product/addproduct";
        return this.http.post(url, product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.create = function (product) {
        // return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        var url = this.domain + "product/getallproducts";
        //return this.db.list('/categories',).valueChanges();
        return this.http.get(url)
            .map(function (response) {
            var res = response.json();
            var categories = response.json();
            return categories;
        });
        //return null;
    };
    ProductService.prototype.get = function (productId) {
        //return this.db.object('/products/' + productId).valueChanges();
        return null;
    };
    ProductService.prototype.getProductByCategory = function (categoryname) {
        var url = this.domain + "product/getproductsbycategory/" + categoryname;
        //return this.db.list('/categories',).valueChanges();
        return this.http.get(url).map(function (response) {
            var body = response.json();
            return body || {};
        });
    };
    ProductService.prototype.update = function (productId, product) {
        //return this.db.object('/products/' + productId).update(product);
        return null;
    };
    ProductService.prototype.deleteProduct = function (productId) {
        console.log(productId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "product/deleteproduct/" + productId;
        return this.http.delete(url, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            res.json();
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map