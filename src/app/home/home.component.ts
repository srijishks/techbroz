import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ Globals, ProductService ],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	data:any;
	formvalue:any;
	product:any;
  constructor(private _productservice: ProductService, private globals: Globals) { }

  ngOnInit() {

  	let slides = document.querySelectorAll('#slides .slide');
	let currentSlide = 0;
	let slideInterval = setInterval(function nextSlide(){
		slides[currentSlide].className = 'slide';
		currentSlide = (currentSlide+1)%slides.length;
		slides[currentSlide].className = 'slide showing';
	},2000);
		

				this._productservice.selectproducts(this.formvalue)
			      .subscribe(
	                       product =>{
	                       	this.product = product;
	                       	this.data = this.product.data;
	                       	console.log(this.product.data);
	                       }	,
	                        err => {
	                            // Log errors if any
	                            console.log(err);
	                        });

  }

}
