import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  categoryname = '';
  categoryimage = '';

  constructor(private category: CategoryService) {}

  ngOnInit(): void {}
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.categoryimage = file;
    }
  }
  addCategory() {
    const formData = new FormData();
    formData.append('categoryimage', this.categoryimage);
    formData.append('categoryname', this.categoryname);
    this.category.addCategory(formData).subscribe((data) => {
      console.log(data);
      if (data) alert('failed');
      else alert('succes');
    });
  }
}
