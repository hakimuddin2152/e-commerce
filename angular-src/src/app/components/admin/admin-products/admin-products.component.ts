import { Observable } from 'rxjs/Observable';
import { CategoryService } from 'app/services/category.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  categories$:Observable<any>;
  constructor(private categorieService: CategoryService) { 
    this.categories$=categorieService.getAll()
  }
  showProductForm:boolean
  showCategoryForm:boolean=true
  showForm(event)
   {
     let linkId=event.srcElement.attributes.id.nodeValue
     console.log(linkId)
     console.log(event)
     if(linkId=="productLink")
     {
     this.showCategoryForm=false
     this.showProductForm=true
     }
     else if (linkId=="categoryLink")
     {
      this.showProductForm=false
       this.showCategoryForm=true
      
     }
   }

   saveCategory(formData){
     console.log(formData)
    this.categorieService.saveCategory(formData)
   }
  ngOnInit() {
  }

}
