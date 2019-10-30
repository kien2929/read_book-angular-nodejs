import { AuthGuard } from "./guards/auth.guard";
import { BookViewComponent } from "./client/book-view/book-view.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ClientComponent } from "./client/client.component";
import { ListBookComponent } from "./admin/list-book/list-book.component";
import { ListUserComponent } from "./admin/list-user/list-user.component";
import { ListCategoryComponent } from "./admin/list-category/list-category.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";

const routesConfig: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ["yes"] },
    children: [
      { path: "", redirectTo: "user", pathMatch: "full" },
      {
        path: "user",
        component: ListUserComponent,
        canActivate: [AuthGuard],
        data: { role:["yes"] }
      },
      {
        path: "book",
        component: ListBookComponent,
        canActivate: [AuthGuard],
        data: { role: ["yes"] }
      },
      {
        path: "category",
        component: ListCategoryComponent,
        canActivate: [AuthGuard],
        data: { role: ["yes"] }
      }
    ]
  },
  {
    path: "book/:id",
    component: BookViewComponent,
    canActivate: [AuthGuard],
    data: { role: ["no"] }
  },
  {
    path: "client",
    component: ClientComponent,
    canActivate: [AuthGuard],
    data: { role: ["no"] }
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
