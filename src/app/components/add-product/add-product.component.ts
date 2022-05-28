import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductView } from 'src/app/models/ProductView';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {

  public product: ProductView = {
    _id: '',
    name: '',
    image: '',
    price: '',
    qty: '',
    info: '',
  };
  public isEmptyField: boolean | undefined;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  public submitCreateProduct() {

    if (this.product.name !== '' && this.product.image !== '' && this.product.price !== '' && this.product.qty !== '' && this.product.info !== '') {
      this.productService.createProduct(this.product).subscribe(result => {
        this.router.navigate(['/products/admin']).then();
      });
    } else {
      this.isEmptyField = true;
    }
  }
}
