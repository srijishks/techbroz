import { HomeComponent } from './home/home.component';
// import { QuestionComponent } from './question/question.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	// { path: 'question', component: QuestionComponent },

	{ path: '',  redirectTo: 'home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);