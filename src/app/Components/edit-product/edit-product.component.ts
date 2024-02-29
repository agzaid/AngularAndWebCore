import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  productId: any;
  myProduct: any;

  constructor(private route: ActivatedRoute, private authProducts: AuthenticationService) { }


  ngOnInit() {
    debugger;
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    })
    this.authProducts.getProduct(this.productId).subscribe((productData: Product) => {
      debugger;
      console.log(productData);
      this.myProduct = productData;

    })
    console.log(parseInt(this.productId));
  }

  UpdateProduct(myProduct: Product) {
    debugger;
    this.authProducts.updateProduct(myProduct).subscribe();

  }
}

