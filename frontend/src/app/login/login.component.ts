import { Component, OnInit } from "@angular/core"; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";

import { LoginService } from "../service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loading = false;
  returnURL: string;
  title;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginService.logout();
    this.returnURL = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  login() {
    this.loading = true;
    this.loginService
      .login(this.username, this.password)
      .pipe(first())
      .subscribe(
        (data) => {
          if(data.role=="yes"){
            this.router.navigate(["/admin"]);
          }
          console.log("đăng nhập");
         if(data.role=="no"){
           this.router.navigate(["/client"]);
         }
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.title="Đăng nhập không thành công!"
        }
      );
  }
}
