import { CategoryService } from '../../service/category.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() id: number;
  @Input() catalog: string;
  @Input() description: string;
  @Input() parentId: number;
  @Output() removeCategory = new EventEmitter<number>();
  @Output() editCategory = new EventEmitter<number>();
  removeByClick() {
    this.removeCategory.emit(this.id);
    this.categoryService.getCategory()
  }
  editByClick() {
    this.editCategory.emit(this.id);
  }
  constructor(private categoryService:CategoryService) {}

  ngOnInit() {}
}
