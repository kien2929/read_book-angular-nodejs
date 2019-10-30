import { CategoryService } from "../../service/category.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-category",
  templateUrl: "./list-category.component.html",
  styleUrls: ["./list-category.component.css"]
})
export class ListCategoryComponent implements OnInit {
  catalog = "";
  description = "";
  parentId;
  id;
  feedbackcatalog = "";
  feedbackdescription = "";
  feedbackparentId = "";
  arrCategory;
  category;
  datadismiss="modal";
  arrParentCategory;
  pageOfItems:Array<any>;
  searchKey;
  restore() {
    console.log(this.searchKey);

    this.categoryService.search("%" + this.searchKey + "%").subscribe((data) => {
      this.arrCategory = data;
    });
  }
  getCatelog() {
    this.categoryService.getCategoryChild(0).subscribe((data) => {
       (this.arrParentCategory = data);
    });
  }
  resetData() {
    this.getCatelog();
    this.id = 0;
    this.catalog = "";
    this.description = "";
    this.parentId = "";
    this.feedbackcatalog = "";
    this.feedbackdescription = "";
    this.feedbackparentId = "";
  }
  addPerson() {
    if (this.id) {
      this.category = {
        catalog: this.catalog,
        description: this.description,
        parentId: this.parentId
      };
      this.categoryService
        .editCategory(this.id, this.category)
        .subscribe((res) => {
          this.categoryService.getCategory().subscribe((data) => {
            alert("Success !");
            this.arrCategory = data;
            this.id = 0;
            this.catalog = "";
            this.description = "";
            this.parentId = "";
          });
        });
    } else {
      if (this.catalog == "" || this.description == "" || this.parentId == "") {
        this.datadismiss = "";
        console.log("1");
        if (this.catalog == "") {
          this.feedbackcatalog = "Please choose here";
        }
        if (this.description == "") {
          this.feedbackdescription = "Please insert here";
        }
        if (this.parentId == "") {
          this.feedbackparentId = "Please insert here";
        }
      } else {
        this.datadismiss = "modal";
        //add
        this.feedbackcatalog = "";
        this.feedbackdescription = "";
        this.feedbackparentId = "";
        this.category = {
          catalog: this.catalog,
          description: this.description,
          parentId: this.parentId
        };
        console.log(this.category);
        this.categoryService.addCategory(this.category).subscribe((data) => {
          this.categoryService.getCategory().subscribe((data) => {
            alert("Success !");
            this.arrCategory = data;
            this.getCatelog();
          });
        });
        this.catalog = "";
        this.description = "";
        this.parentId = "";
      }
    }
  }
  removeCategoryById(id: number) {
    this.categoryService.getCategoryChild(id).subscribe((res) => {
      console.log(res);

      if (res.length != 0) {
        for (var i = 0; i < res.length; i++) {
          var obj = res[i].id;
          console.log(obj);
          this.categoryService.removeCategory(obj).subscribe((res) => {
            this.categoryService.removeCategory(id).subscribe((res) => {
              this.categoryService.getCategory().subscribe((data) => {
                this.arrCategory = data;
              });
            });
          });
        }
      } else {
        this.categoryService.removeCategory(id).subscribe((res) => {
          this.categoryService.getCategory().subscribe((data) => {
            this.arrCategory = data;
          });
        });
      }
    });
  }
  editCategoryById(id: number) {
    this.category = {
      catalog: this.catalog,
      description: this.description,
      parentId: this.parentId
    };
    this.categoryService.getCategoryById(id).subscribe((data) => {
      this.catalog = data[0].catalog;
      this.description = data[0].description;
      this.parentId = data[0].parentId;
      this.id = data[0].id;
    });
  }
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.resetData();
    this.categoryService.getCategory().subscribe((data) => {
      this.arrCategory = data;
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
}
