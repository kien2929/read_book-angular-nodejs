import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../service/category.service";
import { BookService } from "../service/book.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"]
})
export class ClientComponent implements OnInit {
  arrayMenu = [];
  dictMenu = new Map();
  // username;
  arrCategory;
  category = 0;
  searchKey;
  categoryChild;
  arrBooks0;
  arrBooks;
  temp;
  pageOfItems: Array<any>;

  restore() {
    console.log(this.searchKey);

    this.bookService.search("%" + this.searchKey + "%").subscribe((data) => {
      this.arrBooks = data;
    });
    // }
  }
  logout() {}
  changeCategory(id) {
    if (id == 0) {
      this.arrBooks = this.arrBooks0;
    } else {
      this.bookService.getBookByCategory(id).subscribe((data0) => {
        this.temp = data0;
        this.categoryService.getCategoryChild(id).subscribe((data1) => {
          this.categoryChild = data1;
          if (this.categoryChild.length == 0) {
            this.arrBooks = data0;
            // console.log("no child");
          } else {
            for (var i = 0; i < this.categoryChild.length; i++) {
              // console.log(this.categoryChild[i].id);
              this.bookService
                .getBookByCategory(this.categoryChild[i].id)
                .subscribe((data2) => {
                  this.arrBooks = data0;
                  for (var i = 0; i < data2.length; i++) {
                    this.arrBooks.push(data2[i]);
                  }
                });
            }
          }
        });
      });
    }
  }

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    // this.username = JSON.parse(localStorage.getItem("user")).username;
    this.categoryService.getCategory().subscribe((data0) => {
      this.arrCategory = data0;
      this.bookService.getBooks().subscribe((data1) => {
        this.arrBooks = data1;
        this.arrBooks0 = data1;
      });
    });
    this.categoryService.getCategory().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].parentId == 0) {
          this.dictMenu.set(data[i], []);
          for (let j = 0; j < data.length; j++) {
            if (data[j].parentId == data[i].id) {
              this.dictMenu.get(data[i]).push(data[j]);
            }
          }
        }
      }
      // console.log(this.dictMenu);
      console.log("%c Chúc mừng năm mới %c", 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;");
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
