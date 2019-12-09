import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Observable } from "rxjs";
import { map } from "rxjs-compat/operator/map";
import { ProductFormComponent } from "src/app/product-form/product-form.component";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.scss"]
})
export class AdminProductsComponent implements OnInit {
  produits$: Observable<any[]>;
  produitsFiltered: any[] = [];
  search: string = "";

  constructor(private productService: ProductService) {}

  onSearch() {
    this.produits$.subscribe(produits => {
      this.produitsFiltered = produits.filter(
        p => p.titre.indexOf(this.search) === 0
      );
    });
  }

  documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  };

  ngOnInit() {
    this.produits$ = this.productService.getProducts().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.produits$.subscribe(p => (this.produitsFiltered = p));
  }
}
