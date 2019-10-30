import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable, throwError } from "rxjs";
  import { catchError, map, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
  // import {of} from 'rxjs/observable';
  
  @Injectable({
    providedIn: "root"
  })
  export class UserService {
    private userUrl = `${environment.apiUrl}/user/users/`;
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
    getUsers() {
      return this.http.get(this.userUrl).pipe(
        tap(),
        catchError(this.handleError)
      );
    }
    getUserById(id){
        return this.http.get(this.userUrl+id).pipe(
            tap()
            ,catchError(this.handleError)
        )
    }
    getUserByName(name){
      
    }
    addUser(userInfo) {
      return this.http.post(this.userUrl, userInfo).pipe(
        tap(),
        catchError(this.handleError)
      );
    }
    editUser(id,userInfo){
        return this.http.put(this.userUrl+id,userInfo).pipe(
            tap(),
            catchError(this.handleError)
        )
    }
    removeUser(id){
        return this.http.delete(this.userUrl+id).pipe(
            tap(),
            catchError(this.handleError)
        )
    }
    search(searchKey) {
      console.log(searchKey);
      let key={key:searchKey};
      return this.http.post(this.userUrl+"search",key).pipe(
        tap(),
        catchError(this.handleError)
      );
    }
    constructor(private http: HttpClient) {}
  }
  