import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category = 'https://bookmymealjaya.herokuapp.com/api/admin/viewcategory';
  add_category = 'https://bookmymealjaya.herokuapp.com/api/admin/addcategory';
  delete_category='https://bookmymealjaya.herokuapp.com/api/admin/deletecategory';
  constructor(private _category: HttpClient) {}
  public categoryList(): Observable<any> {
    return this._category.get(this.category);
  }
  addcategory(categoryname: string, categoryimage: string): Observable<any> {
    return this._category.post<any>(this.add_category, {
      categoryname: categoryname,
      categoryimage: categoryimage,
    });
  }
  addCategory(formData:FormData){
    
    return this._category.post(this.add_category,formData);
  }
  removeCategory(id:string){
    return this._category.get<any>(this.delete_category+"/"+id)
  }
  
}
