import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductView } from '../models/ProductView';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public createProduct(ProductView: ProductView): Observable<ProductView> {
    let serverUrl: string = `http://127.0.0.1:5000/api/v1/products`;
    return this.http.post<ProductView>(serverUrl, ProductView).pipe(
      catchError(this.handleError));
  }

  public updateProduct(productId: string, product: ProductView): Observable<ProductView> {
    let serverUrl: string = `http://127.0.0.1:5000/api/v1/products/${productId}`;
    return this.http.put<ProductView>(serverUrl, product).pipe(
      catchError(this.handleError));
  }

  public getAllProduct(): Observable<ProductView> {
    let serverUrl: string = `http://127.0.0.1:5000/api/v1/products`;
    return this.http.get<ProductView>(serverUrl).pipe(
      catchError(this.handleError));
  }

  public getSingleProduct(productId: string): Observable<ProductView> {
    let serverUrl: string = `http://127.0.0.1:5000/api/v1/products/${productId}`;
    return this.http.get<ProductView>(serverUrl).pipe(
      catchError(this.handleError));
  }
  public deleteProduct(productId: string): Observable<ProductView> {
    let serverUrl: string = `http://127.0.0.1:5000/api/v1/products/${productId}`;
    return this.http.delete<ProductView>(serverUrl).pipe(
      catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      errorMessage = `An Error Occured: ${error.error}`;
    } else {
      errorMessage = ` Backend Returned Code ${error.status}, body was : ${error.error}`;
    }

    errorMessage += '\n Something bad happend; Please try again later.';
    return throwError(errorMessage);
  }
}
