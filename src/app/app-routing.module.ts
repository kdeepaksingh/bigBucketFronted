import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';

const routes: Routes = [
  {path:'',redirectTo:'products/add', pathMatch:'full'},
  { path: 'products/list', component: ProductDisplayComponent },
  { path: 'products/admin', component: ProductAdminComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'products/:productId', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
