import { CategoryService } from "./../../service/category.service";
import { Component, OnInit } from "@angular/core";
import { BookService } from "../../service/book.service";
import { FileUploader } from "ng2-file-upload";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-list-book",
  templateUrl: "./list-Book.component.html",
  styleUrls: ["./list-Book.component.css"]
})
export class ListBookComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: "http://localhost:3000/upload"
  });
  id;
  title = "";
  author = "";
  publish = "";
  price;
  image;
  categoryId;
  content;
  numberOfPages;
  companyIssued;
  datadissmiss = "modal";

  feedbacktitle = "";
  feedbackauthor = "";
  feedbackpublish = "";
  feedbackprice = "";

  feedbackcategoryId = "";
  feedbackcontent = "";
  feedbacknumberOfPages = "";
  feedbackcompanyIssued = "";
  arrBook;
  book;
  arrCategory;
  pageOfItems: Array<any>;
  searchKey;
  registerForm: FormGroup;
  submitted = false;

  restore() {
    console.log(this.searchKey);

    this.bookService.search("%" + this.searchKey + "%").subscribe((data) => {
      this.arrBook = data;
    });
  }
  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.arrCategory = data;
    });
  }
  remove() {
    this.uploader.queue = [];
  }
  upload() {
    if (this.id != "") {
      console.log(
        (this.uploader.queue[0].file.name =
          this.id + "." + this.uploader.queue[0].file.name.split(".").slice(-1))
      );
      this.uploader.queue[0].file.name =
        this.id + "." + this.uploader.queue[0].file.name.split(".").slice(-1);
      this.image = this.uploader.queue[0].file.name;
      this.bookService.getBookById(this.id).subscribe((data) => {
        this.title = data[0].title;
        this.author = data[0].author;
        this.publish = data[0].publish;
        this.price = data[0].price;
        this.categoryId = data[0].categoryId;
        this.content = data[0].content;
        this.numberOfPages = data[0].numberOfPages;
        this.companyIssued = data[0].companyIssued;
        this.book = {
          title: this.title,
          author: this.author,
          publish: this.publish,
          price: this.price,
          image: this.image,
          categoryId: this.categoryId,
          content: this.content,
          numberOfPages: this.numberOfPages,
          companyIssued: this.companyIssued
        };
        this.bookService.editBook(this.id, this.book).subscribe((res) => {
          this.bookService.getBooks().subscribe((data) => {
            this.arrBook = data;
            this.id = 0;
            this.title = "";
            this.author = "";
            this.publish = "";
            this.price = "";
            this.categoryId = "";
            this.content = "";
            this.numberOfPages = "";
            this.companyIssued = "";
            this.image = "";
          });
        });
      });
    }
  }
  addBook() {
    if (this.id) {
      this.bookService.getBookById(this.id).subscribe((res) => {
        this.book = {
          title: this.title,
          author: this.author,
          publish: this.publish,
          price: this.price,
          image: res[0].image,
          categoryId: this.categoryId,
          content: this.content,
          numberOfPages: this.numberOfPages,
          companyIssued: this.companyIssued
        };
        this.bookService.editBook(this.id, this.book).subscribe((res) => {
          this.bookService.getBooks().subscribe((data) => {
            alert("Success !");
            this.arrBook = data;
            this.id = 0;
            this.title = "";
            this.author = "";
            this.publish = "";
            this.price = "";
            this.categoryId = "";
            this.content = "";
            this.numberOfPages = "";
            this.companyIssued = "";
          });
        });
      });
    } else {
      if (
        this.title == "" ||
        this.author == "" ||
        this.publish == "" ||
        this.price == "" ||
        this.categoryId == "" ||
        this.content == "" ||
        this.numberOfPages == "" ||
        this.companyIssued == ""
      ) {
        this.datadissmiss = "";
        console.log("1");
        if (this.title == "") {
          this.feedbacktitle = "Please choose here";
        }
        if (this.author == "") {
          this.feedbackauthor = "Please insert here";
        }
        if (this.publish == "") {
          this.feedbackpublish = "Please insert here";
        }
        if (this.price == "") {
          this.feedbackprice = "Please insert here";
        }

        if (this.categoryId == "") {
          this.feedbackcategoryId = "Please insert here";
        }
        if (this.content == "") {
          this.feedbackcontent = "Please insert here";
        }
        if (this.numberOfPages == "") {
          this.feedbacknumberOfPages = "Please insert here";
        }
        if (this.companyIssued == "") {
          this.feedbackcompanyIssued = "Please insert here";
        }
      } else {
        this.datadissmiss = "modal";
        //add
        this.book = {
          title: this.title,
          author: this.author,
          publish: this.publish,
          price: this.price,
          categoryId: this.categoryId,
          content: this.content,
          numberOfPages: this.numberOfPages,
          companyIssued: this.companyIssued
        };
        this.bookService.addBook(this.book).subscribe((data) => {
          this.bookService.getBooks().subscribe((data) => {
            alert("Success !");
            this.arrBook = data;
            this.title = "";
            this.author = "";
            this.publish = "";
            this.price = "";
            this.categoryId = "";
            this.content = "";
            this.numberOfPages = "";
            this.companyIssued = "";
          });
        });
      }
    }
  }
  resetData() {
    this.feedbacktitle = "";
    this.feedbackauthor = "";
    this.feedbackpublish = "";
    this.feedbackprice = "";

    this.feedbackcategoryId = "";
    this.feedbackcontent = "";
    this.feedbacknumberOfPages = "";
    this.feedbackcompanyIssued = "";
    this.getCategory();
    this.title = "";
    this.author = "";
    this.publish = "";
    this.price = "";
    this.categoryId = "";
    this.content = "";
    this.numberOfPages = "";
    this.companyIssued = "";
  }
  uploadId(id: number) {
    this.id = id;
  }
  removeBookById(id: number) {
    this.bookService.removeBook(id).subscribe((res) => {
      this.bookService.getBooks().subscribe((data) => {
        this.arrBook = data;
      });
    });
  }
  editBookById(id: number) {
    this.book = {
      title: this.title,
      author: this.author,
      publish: this.publish,
      price: this.price,
      // image: this.image,
      categoryId: this.categoryId,
      content: this.content,
      numberOfPages: this.numberOfPages,
      companyIssued: this.companyIssued
    };
    this.bookService.getBookById(id).subscribe((data) => {
      this.id = data[0].id;
      this.title = data[0].title;
      this.author = data[0].author;
      this.publish = data[0].publish;
      this.price = data[0].price;
      this.image = data[0].image;
      this.categoryId = data[0].categoryId;
      this.content = data[0].content;
      this.numberOfPages = data[0].numberOfPages;
      this.companyIssued = data[0].companyIssued;
      this.datadissmiss = "modal";
    });
  }
  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.resetData();
    this.bookService.getBooks().subscribe((data) => {
      this.arrBook = data;
    });
    this.registerForm = this.formBuilder.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      publish: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],
      content: ["", Validators.required],
      numberOfPages: ["", Validators.required],
      companyIssued: ["", Validators.required]
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert("SUCCESS!! :-)");
  }
}
