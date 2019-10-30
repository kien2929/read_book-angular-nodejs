import { BookService } from '../../service/book.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() author: string;
  @Input() price: number;
  @Output() removeBook = new EventEmitter<number>();
  @Output() editBook = new EventEmitter<number>();
  @Output() upload = new EventEmitter<number>();
  uploadByClick(){
    this.upload.emit(this.id);
  }
  removeByClick() {
    this.removeBook.emit(this.id);
    this.bookService.getBooks()
  }
  editByClick() {
    this.editBook.emit(this.id);
  }
  constructor(private bookService:BookService) {}

  ngOnInit() {}
}

