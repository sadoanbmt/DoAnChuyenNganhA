import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products'; // Stub API

  constructor(private http: HttpClient) {}

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getRelatedProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '?_limit=4');
  }
}
