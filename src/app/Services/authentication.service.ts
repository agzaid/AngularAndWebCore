import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { JwtAuth } from '../Models/jwtAuth';
import { Product } from '../Models/product';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "AuthManagement/Register";
  loginUrl = "AuthManagement/Login";
  weatherUrl = "WeatherForecast";
  productUrl = "Product";
  addProductUrl = "Product/addproduct";
  deleteProductUrl = "Product";

  // readonly baseUrl="https://localhost:44359/Api/Users"

  constructor(private http: HttpClient) { }


  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`, user);
  }

  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.loginUrl}`, user);
  }


  public getWeather(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.weatherUrl}`);
  }

  public getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.productUrl}`);
  }

  public getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${this.productUrl}/${id}`);
  }
  public addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.addProductUrl}`, product);
  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/${this.deleteProductUrl}/${id}`);
  }
  public updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/${this.deleteProductUrl}`, product);
  }

}
