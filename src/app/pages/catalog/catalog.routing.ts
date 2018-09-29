import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';

const childRoutes: Routes = [
  {
    path: '',
    component: CatalogComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
