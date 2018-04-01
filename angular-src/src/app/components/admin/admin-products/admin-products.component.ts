import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { element } from 'protractor';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { MatTableModule, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Product } from 'app/model/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[];
  product: Product;
  subscription: Subscription;
  // tableResource: DataTableResource<Category>;
  // items: Category[] = [];
  // itemCount: number;

  displayedColumns = ['key', 'title', 'price', 'Update', 'Delete'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService,
    private routerService: Router) {
    this.subscription = this.productService.getAll()
      .subscribe(productList => {
        this.products = productList;
        this.initializeTable(this.products)
      })


  }


  ngOnInit() {
  }

  private initializeTable(products: Product[]) {
    this.dataSource = new MatTableDataSource(products)
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  isShowForm = false;
  showForm(element?) {
    if (element == undefined) {

      this.product = {
        _id: '',
        title: '',
        description: '',
        price: 0,
        category: '',
        imageUrl: ''
      }
      console.log(this.product)
    }
    else {
      this.product = {
        _id: element._id,
        description: element.description,
        title: element.title,
        price: element.price,
        category: element.category,
        imageUrl: element.imageUrl
      }
    }


    // }
    console.log(element)
    this.isShowForm = !this.isShowForm
  }

  saveCategory(a) {
    this.isShowForm = false
    console.log(a)
    console.log(this.product)
    this.productService.saveProduct(this.product).subscribe(data => {
      if (data) {
        console.log(data)
        this.initializeTable(this.products)
      }

    })
  }

  deleteCategory(productId) {
    if (confirm('Do you really want to delete this category')) {
      this.productService.deleteProduct(productId).subscribe(data => {
        if (data) {
          console.log(data)
        }

        // })

      })
    }
  }
}




