import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
category:any=[];
  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
    this._category.categoryList().subscribe(res=>{
      console.log(res);
      this.category = res;
    })
  }

}
