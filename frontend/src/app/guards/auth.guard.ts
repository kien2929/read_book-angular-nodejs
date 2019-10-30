import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("user")) {
      if (!route.data.role) {
        return true;
      } else {
        // console.log(JSON.parse(localStorage.getItem("user")).role);
        // console.log(route.data.role[0]);
        if (
          JSON.parse(localStorage.getItem("user")).role == route.data.role[0]
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
