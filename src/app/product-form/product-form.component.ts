import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../services/categories.service";
import { Observable } from "rxjs";
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  produit = {};
  id: string;
  constructor(
    private categoriesServices: CategoriesService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories$ = this.categoriesServices.getCategories();
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.productService
        .getProduct(this.id)
        .valueChanges()
        .subscribe(product => (this.produit = product));
    }
  }

  onSubmit(form) {
    this.id
      ? this.productService.updateProduct(this.id, form.value)
      : this.productService.save(form.value);
    this.router.navigate(["/admin/products"]);
  }
  onDelete() {
    if (confirm("Voulez vous vraiment supprimer cet article ?")) {
      this.productService.delete(this.id);
      this.router.navigate(["/admin/products"]);
    }
  }
}
