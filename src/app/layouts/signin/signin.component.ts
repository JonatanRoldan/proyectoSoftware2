import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  user = {
    userName: "",
    password: "",
    state: 1,
    rol: "admin",
  };

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {}
  signIn() {
    console.log(this.user);
    this.authService.signIn(this.user).subscribe((res) => {
      console.log(res);
      localStorage.setItem("token", res.token);
      this.router.navigate(["/dashboard"]);
    }),
      (err) => {
        console.log(err);
      };
  }
}
