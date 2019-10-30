import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Book } from './../model/book';
import { environment } from 'src/environments/environment';

// import {of} from 'rxjs/observable';

@Injectable({
  providedIn: "root"
})
export class BookService {
  private bookUrl = `${environment.apiUrl}/book/books/`;
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
  getBooks() {
    return this.http.get(this.bookUrl).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  getBookById(id) {
    return this.http.get(this.bookUrl + id).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  getBookByCategory(id) {
    return this.http.get<Book[]>(this.bookUrl + "by/" + id).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  search(searchKey) {
    console.log(searchKey);
    let key={key:searchKey};
    return this.http.post(this.bookUrl+"search",key).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  addBook(bookInfo) {
    return this.http.post(this.bookUrl, bookInfo).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  editBook(id, bookInfo) {
    return this.http.put(this.bookUrl + id, bookInfo).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  removeBook(id) {
    return this.http.delete(this.bookUrl + id).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  constructor(private http: HttpClient) {}
}
