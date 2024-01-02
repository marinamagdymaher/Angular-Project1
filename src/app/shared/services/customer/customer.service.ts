import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ProductApi } from 'src/app/ViewModels/product/product-api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  // async getAllProducts():Promise<any> {
  //   try {
  //     this.httpClient
  //       .get<Observable<ProductApi>>(environment.apiUrl)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  getAllProducts(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl)
    // .pipe(
    //   catchError(this.handleError<ProductApi[]>('getHeroes', []))
    // )
  }
  // handleError<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<ProductApi[]>) => import("rxjs").ObservableInput<any> {
  //   throw new Error('Method not implemented.');
  // }


  updateProduct(data: any): Observable<any> {
    return this.httpClient.patch(
      `${environment.apiUrl}/update/${data.id}`,
      data
    );
  }
  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }
}
