import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  URL = "http://localhost:8080/api";

  constructor(public http: HttpClient, public router: Router) {}

  signIn(user) {
    return this.http.post<any>(this.URL + "/user/signin", user);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/home"]);
  }
}
