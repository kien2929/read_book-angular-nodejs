import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FileDropDirective, FileSelectDirective } from "ng2-file-upload";
import { JwPaginationComponent } from "jw-angular-pagination";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { ListUserComponent } from "./admin/list-user/list-user.component";
import { UserComponent } from "./admin/user/user.component";
import { ListBookComponent } from "./admin/list-book/list-book.component";
import { BookComponent } from "./admin/book/book.component";
import { ListCategoryComponent } from "./admin/list-category/list-category.component";
import { CategoryComponent } from "./admin/category/category.component";
import { ClientComponent } from "./client/client.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BookViewComponent } from "./client/book-view/book-view.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    AdminComponent,
    ListUserComponent,
    UserComponent,
    ListBookComponent,
    BookComponent,
    ListCategoryComponent,
    CategoryComponent,
    ClientComponent,
    PageNotFoundComponent,
    BookViewComponent,
    FileDropDirective,
    FileSelectDirective,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
