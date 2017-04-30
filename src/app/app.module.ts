import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { routing, appRoutingProviders }  from './app.routes';
import { UrlrewritePipe,StripPipe } from './pipe/urlrewrite.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    DetailsComponent,
    CartComponent,
    OrderReviewComponent,
    OrderConfirmComponent,
    OrderSuccessComponent,
    UrlrewritePipe,
    StripPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
