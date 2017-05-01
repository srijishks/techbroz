import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Product } from './product';
import {Observable} from 'rxjs/Rx';
import { Globals } from '../globals';

@Injectable()
export class ProductService {

    constructor(private globals: Globals, private http:Http) { }

    selectproducts(formvalue: any): Observable<Product> {
    	let body = {
              "params": {
                minlenth: "0",
                maxlenth: "20"
              }
            };
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.globals.ApiUrl+"/selectproducts", bodyString, options) 
             //.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
             .map(this.extractData, bodyString)
             .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


    }
    selectproductsbyid(id: number): Observable<Product> {
      let body = {
              "params": {
                id: id
              }
            };
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.globals.ApiUrl+"/selectproductsbyid", bodyString, options) 
             //.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
             .map(this.extractData, bodyString)
             .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

private extractData(res: Response ) {
    let body = res.json();
    let bodyparsed = JSON.parse(body);
    // console.log(bodyparsed.data[0].title);
      // console.log(bodyparsed.data);
    return bodyparsed || { };
  }
}
