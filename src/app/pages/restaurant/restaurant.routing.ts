import { Routes, RouterModule } from '@angular/router';
import {RestaurantComponent} from './restaurant.component';

const childRoutes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
