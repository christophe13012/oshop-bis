import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}
  save(data) {
    this.db.list("/produits").push(data);
  }
  getProducts() {
    return this.db.list("/produits").snapshotChanges();
  }
  getProduct(id) {
    return this.db.object("/produits/" + id);
  }
  updateProduct(id, product) {
    this.db.object("/produits/" + id).update(product);
  }

  delete(id) {
    this.db.object("/produits/" + id).remove();
  }
}
