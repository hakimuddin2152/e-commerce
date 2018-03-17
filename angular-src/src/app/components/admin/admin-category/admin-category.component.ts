import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../model/category';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { MatTableModule, MatTableDataSource} from '@angular/material';
import { MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  showAddCategoryForm=false;
  showUpdateCategoryForm=false;
  categories: Category[];
  subscription: Subscription;
  // tableResource: DataTableResource<Category>;
  // items: Category[] = [];
  // itemCount: number;
  displayedColumns = ['key', 'title', 'featured', 'imageUrl'];
  dataSource ;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categoryService:CategoryService) {
    this.subscription=this.categoryService.getAll()
    .subscribe(category=>{
      this.categories=category;
      this.initializeTable(this.categories)
    })
   }
   
   
  ngOnInit() {
  }
  private initializeTable(categories: Category[]) {
   this.dataSource=new MatTableDataSource(categories)
   this.dataSource.sort=this.sort
   this.dataSource.paginator=this.paginator
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  showForm(event){
  let currentForm=event.srcElement.attributes.id.nodeValue
  
  console.log(currentForm)
  if(currentForm=="addCategory")
  {
    console.log(currentForm)
   this.showAddCategoryForm=true;
   this.showUpdateCategoryForm=false;
  
  }
  else if(currentForm=="updateCategory"){
    console.log(currentForm)
    this.showAddCategoryForm=false;
    this.showUpdateCategoryForm=true;
   
  }

}

}



export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
