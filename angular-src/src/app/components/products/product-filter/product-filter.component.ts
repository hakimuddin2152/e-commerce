import { CategoryService } from '../../../services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$:Observable<any>;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
    
  }

  ngOnInit() {
  }

}
