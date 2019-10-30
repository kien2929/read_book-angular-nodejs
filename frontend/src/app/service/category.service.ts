
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable, throwError } from "rxjs";
  import { catchError, map, tap } from "rxjs/operators";
  import { Category } from './../model/category';
import { environment } from 'src/environments/environment';
  // import {of} from 'rxjs/observable';
  
  @Injectable({
    providedIn: "root"
  })
  export class CategoryService {
    private categoryUrl = `${environment.apiUrl}/category/categories/`;
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error("An error", error.error.message);
      } else {
        console.error(
          `Backend return ${error.status} ,` + `body was ${error.error}`
        );
      }
      return throwError(error);
    }
    getCategory() {
      return this.http.get<Category[]>(this.categoryUrl).pipe(
        tap(),
        catchError(this.handleError)
      );
    }
    getCategoryChild(parentId){
      return this.http.get<Category[]>(this.categoryUrl+"child/"+parentId).pipe(
        tap(),
        catchError(this.handleError)
      )
    }
    getCategoryById(id){
        return this.http.get<Category[]>(this.categoryUrl+id).pipe(
            tap()
            ,catchError(this.handleError)
        )
    }
    addCategory(categoryInfo) {
      return this.http.post(this.categoryUrl, categoryInfo).pipe(
        tap(),
        catchError(this.handleError)
      );
    }
    editCategory(id,categoryInfo){
        return this.http.put(this.categoryUrl+id,categoryInfo).pipe(
            tap(),
            catchError(this.handleError)
        )
    }
    removeCategory(id){
        return this.http.delete(this.categoryUrl+id).pipe(
            tap(),
            catchError(this.handleError)
        )
    }
    search(searchKey) {
      console.log(searchKey);
      let key={key:searchKey};
      return this.http.post(this.categoryUrl+"search",key).pipe(
        tap(),
        catchError(this.handleError)
      );
    }
    constructor(private http: HttpClient) {}
  }
  