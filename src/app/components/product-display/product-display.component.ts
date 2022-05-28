import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductView } from 'src/app/models/ProductView';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.less']
})
export class ProductDisplayComponent implements OnInit {
  productDetails: any = [];
  productList: any = [];
  public products: ProductView[] = [] as ProductView[];
  public errorMessage: string | undefined;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAllProduct().subscribe(result => {
      // console.log(result);
      this.productDetails = result;
      this.productList = this.productDetails['products'];
    }, (error) => {
      this.errorMessage = error;
    });
  }
}
