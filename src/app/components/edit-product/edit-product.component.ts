import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductView } from 'src/app/models/ProductView';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit {
  public productId: string | undefined | null;
  public products: ProductView[] = [] as ProductView[];
  public errorMessage: string | undefined;
  public selectedProduct: any = [];
  public productListDetails: any = [];
  public isEmptyField: boolean | undefined;
  constructor(private activatedroute: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param: ParamMap) => {
      this.productId = param.get('productId');
    });
    this.getSingleProduct();
  }
  public getSingleProduct() {
    if (this.productId) {
      this.productService.getSingleProduct(this.productId).subscribe(result => {
        this.productListDetails=result;
        this.selectedProduct = this.productListDetails['product'];
        // console.log(this.selectedProduct);
      }, (error) => {
        this.errorMessage = error;
      });
    }
  }
  public submitUpdateProduct() {
    if (this.selectedProduct.name !== '' && this.selectedProduct.image !== '' && this.selectedProduct.price !== '' && this.selectedProduct.qty !== '' && this.selectedProduct.info !== '') {
      if (this.productId) {
        this.productService.updateProduct(this.productId, this.selectedProduct).subscribe(result => {
          this.router.navigate(['/products/admin']).then();
        });
      }
    } else {
      this.isEmptyField = true;
    }
  }
}

