import { Component } from "@angular/core";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";
import {  ActivatedRoute, Router} from '@angular/router'



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "httpModuleDemo";
  productResult: Observable<any>;
  pid;
 // constructor(private productService: ProductService) {
  //  this.productResult = this.productService.getService();
 //   console.log(this.productResult);
 // }
 constructor(private productService: ProductService,private route: ActivatedRoute) { 
  this.route.params.subscribe((postId) =>{
    this.pid =postId.id;
    console.log(this.pid);
  });

  // postData() {
    this.productService.postService(this.pid).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        alert("Data Error");
        console.log("error eruma maadey");
      },
      () => {
        alert("Complete");
      }
    );
  }

}