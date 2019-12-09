import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { AuthGuardService } from "./guards/auth-guard.service";
import { AdminAuthService } from "./guards/admin-auth.service";
import { ProductFormComponent } from "./product-form/product-form.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "my-orders",
    component: MyOrdersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "admin/orders",
    component: AdminOrdersComponent,
    canActivate: [AuthGuardService, AdminAuthService]
  },
  {
    path: "admin/products/new",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthService]
  },
  {
    path: "admin/products/:id",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthService]
  },
  {
    path: "admin/products",
    component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminAuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
