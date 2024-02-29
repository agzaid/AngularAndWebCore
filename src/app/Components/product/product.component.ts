import { Component } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private authProducts: AuthenticationService) { }

  public productList: Product[] = [];

  ngOnInit() {
    this.Products();
  }
  Products() {
    this.authProducts.getProducts().subscribe((productData: Product[]) => {
      console.log(productData);
      this.productList = productData;

    });
    // productList = [{this.productCode = "MKC",productName="hello",price=123}];
  }
  Delete(id: number) {
    this.authProducts.delete(id).subscribe();
  }
}
