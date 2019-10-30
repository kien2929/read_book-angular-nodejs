import { Book } from "./../../model/book";
import { BookService } from "./../../service/book.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book-view",
  templateUrl: "./book-view.component.html",
  styleUrls: ["./book-view.component.css"]
})
export class BookViewComponent implements OnInit {
  id;
  book = new Book();
  content;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.id = window.location.pathname.slice(6);
    this.bookService.getBookById(this.id).subscribe((data) => {
     this.book = data[0]; 
     this.content=this.book.content.split(/\n/g);
     console.log(this.content);
     ;
    });
  }
}
