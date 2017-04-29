import { HomeComponent } from './home/home.component';
 import { ListingsComponent } from './listings/listings.component';
 import { DetailsComponent } from './details/details.component';
 import { CartComponent } from './cart/cart.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'listing', component: ListingsComponent },
	{ path: 'details/:name', component: DetailsComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'order-review', component: OrderReviewComponent },
	{ path: 'order-confirm', component: OrderConfirmComponent },
	{ path: 'order-success', component: OrderSuccessComponent },

	{ path: '',  redirectTo: 'home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);