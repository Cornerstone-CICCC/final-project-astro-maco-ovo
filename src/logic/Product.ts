import type { IProduct } from "../types/Product";

export class Product {
  
  public id: number;
  public title: string;
  public price: number;
  public category: string;
  public inStock: boolean;
  public slug: string;
  public image: string;
  public description: string;


  constructor(data: IProduct) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.category = data.category;
    this.inStock = data.inStock;
    this.slug = data.slug;
    this.image = data.image;            
    this.description = data.description; 
  }

  getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  getAvailabilityMessage(): string {
    return this.inStock ? "In Stock" : "Out of Stock";
  }
}