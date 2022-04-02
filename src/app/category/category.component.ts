import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
category:any=[];
categoryService:CategoryService;
  // constructor(private _category:CategoryService) { }

  // ngOnInit(): void {
  //   this._category.categoryList().subscribe(res=>{
  //     console.log(res);
  //     this.category = res;
  //   })
  // }
constructor(private injection:Injector,private _router:Router){
  this.categoryService=this.injection.get(CategoryService)
}
ngOnInit(): void {
    this.categoryService.categoryList().subscribe(res=>{
      console.log(res);
      
      if(res.error)
      alert('failed')
      else
      this.category = res;
    })
}
public deleteCategory(cid:string){
  this.categoryService.removeCategory(cid).subscribe(data=>{
    if(data.err)
    alert('failed to delete category')
    else{
      alert('deleted')
    this.ngOnInit();
    }
  })
}
public edit(){
  this._router.navigate(['edit-category'])
}
}
