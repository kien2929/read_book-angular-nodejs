import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/Operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/user/login`, { username: username, password: password })
      .pipe(
        map((user) => {
          if (user && user.token) {
           
            localStorage.setItem('user', JSON.stringify(user));
          }
          return user;
        })
      );
  }
  logout() {
    localStorage.removeItem('user');
  }
}
