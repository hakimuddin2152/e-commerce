import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { element } from 'protractor';
import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../model/category';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { MatTableModule, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categories: Category[];
  category: Category;
  subscription: Subscription;
  // tableResource: DataTableResource<Category>;
  // items: Category[] = [];
  // itemCount: number;

  displayedColumns = ['key', 'title', 'Featured', 'imageUrl', 'Update', 'Delete'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categoryService: CategoryService,
    private routerService:Router) {
    this.subscription = this.categoryService.getAll()
      .subscribe(categoryList => {
        this.categories = categoryList;
        this.initializeTable(this.categories)
      })


  }


  ngOnInit() {
  }

  private initializeTable(categories: Category[]) {
    this.dataSource = new MatTableDataSource(categories)
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  isShowForm = false;
  showForm(element) {
    if (element == undefined) {

      this.category = {
        _id: '',
        key: '',
        title: '',
        featured: '',
        imageUrl: ''

      }
      console.log(this.category)
    }
    else {
      this.category = {
        _id: element._id,
        key: element.key,
        title: element.title,
        featured: element.featured,
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
    console.log(this.category)
    this.categoryService.saveCategory(this.category).subscribe(data => {
      console.log('category saved successfully !!!!!')
      if (data) {
        console.log(data)
        this.initializeTable(this.categories)
      }

    })
  }

  deleteCategory(categoryId) {
    if(confirm('Do you really want to delete this category'))
    {
    this.categoryService.deleteCategory(categoryId).subscribe(data => {
      this.routerService.navigate(['/admin/manage-category'])
      if (data) {
        console.log(data)
      }

    })

  }
  }
}