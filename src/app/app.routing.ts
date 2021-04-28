/* Enrrutador  */
import { Routes } from "@angular/router";
/* Componentes para */
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HomeLayoutsComponent } from "./layouts/home-layouts/home-layouts.component";
import { SigninComponent } from "./layouts/signin/signin.component";
/* auth */
import { AuthGuard } from "./auth.guard";
export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ],
  },
  {
    path: "home",
    component: HomeLayoutsComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
