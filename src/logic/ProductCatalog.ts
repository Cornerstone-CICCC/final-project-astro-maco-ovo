import type { IProduct } from "../types/Product";
import { Product } from "./Product";

export class ProductCatalog {
  private products: Product[];

  constructor(jsonData: IProduct[]) {
    this.products = jsonData.map((item) => new Product(item));
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter((p) => p.category === category);
  }
}