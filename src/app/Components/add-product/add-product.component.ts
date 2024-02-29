import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private authService: AuthenticationService) {}
  productDto = new Product();

  AddProduct(productDto: Product) {
    debugger;
    this.authService.addProduct(productDto).subscribe();
  }
  
}
