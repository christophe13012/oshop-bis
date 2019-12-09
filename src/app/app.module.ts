import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CheckOutComponent } from "./check-out/check-out.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "src/environments/environment";
import { AuthGuardService } from "./guards/auth-guard.service";
import { MatSelectModule } from "@angular/material/select";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AdminAuthService } from "./guards/admin-auth.service";
import { ProductFormComponent } from "./product-form/product-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CheckOutComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuardService, AdminAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
