import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}
  productData
  getService(): Observable<any> {
    return this.http.get(
      "https://5f04baab8b06d60016ddefd0.mockapi.io/blog"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }

  postService(data):Observable<any> {
    return this.http.get(`https://5f04baab8b06d60016ddefd0.mockapi.ios/blog/${data}`);
    console.log(data);
  }

  } 
