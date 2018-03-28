import { ShoppingCart } from './../../model/shopping-cart';
import { Observable } from 'rxjs/Observable';
//import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../../model/product';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { CategoryService } from 'app/services/category.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  //products: Product[] = [];
  products:Observable<any>;
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;
  categories$:Observable<Response>
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService:CategoryService,
    //private shoppingCartService: ShoppingCartService
  ) {
    //this.categories$=categoryService.getAll();
    //this.products=this.productService.getAll();
    //console.log(this.products)
  }

  // async ngOnInit() {
  //   this.cart$ = await this.shoppingCartService.getCart();
  //   this.populateProducts();
  // }

  private populateProducts() { 
    this.products=this.productService.getAll()
      // .map(products => {
      //   this.products = products;
      //   return this.route.queryParamMap;
      // })
      // .subscribe(params => {
      //   this.category = params.get('category');
      //   this.applyFilter();      
      // });
  }


  private applyFilter() { 
  //  this.filteredProducts = (this.category) ? 
    //this.products.filter(p => p.category === this.category) : 
   // this.products;
  }
  ngOnInit(){ 
    console.log('this.route.paramMap')
this.products=this.route.paramMap.switchMap((params: ParamMap) =>{
  if(params.get('category')==undefined)
  return  this.productService.getProductByCategory('perfume')
  else
  return  this.productService.getProductByCategory(params.get('category'))
})
  }

  ngOnDestroy
}
