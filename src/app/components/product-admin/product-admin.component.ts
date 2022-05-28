import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductView } from 'src/app/models/ProductView';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.less']
})
export class ProductAdminComponent implements OnInit {

  productDetails: any = [];
  productList: any = [];
  public products: ProductView[] = [] as ProductView[];
  public errorMessage: string | undefined;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  public getAllProducts() {
    this.productService.getAllProduct().subscribe(result => {
      console.log(result);
      this.productDetails = result;
      this.productList = this.productDetails['products']
    }, (error) => {
      this.errorMessage = error;
    });
  }
  public deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(result => {
     this.getAllProducts();
    }, (error) => {
      this.errorMessage = error;
    });
  }
}
