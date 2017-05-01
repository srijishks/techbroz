import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { ProductService } from '../service/product.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  providers: [ Globals, ProductService ],
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 product:any;
 pdata:any;
 title:any;
 desc:any;
 availablity:any;
 price:any;
 listprice:any;
 mainimage:any;
  constructor(private _productservice: ProductService, private route: ActivatedRoute, private globals: Globals) { }

  ngOnInit() {

  		this.route.params.subscribe((params: Params) => {
        let productname = params['name'];
        let id = productname.substr(productname.lastIndexOf('-')+1, productname.lenght);
       
        this._productservice.selectproductsbyid(id)
			      .subscribe(
                   product =>{
                   	this.product = product;
                   	console.log(this.product.data[0]);
                   	this.title = this.product.data[0].title;
                   	this.desc = this.product.data[0].description;
                   	this.availablity = this.product.data[0].availablestock;
                   	this.price = this.product.data[0].price;
                   	this.listprice = this.product.data[0].listprice;
                   	this.mainimage = this.product.data[0].mainimage;
                   	console.log(this.pdata);
                   },
                    err => {
                        // Log errors if any
                        console.log(err);
                 });
       });

     
	  }
	

}
