import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user.component';

const childRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
