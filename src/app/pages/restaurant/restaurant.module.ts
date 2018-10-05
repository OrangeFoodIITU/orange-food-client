import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {RestaurantComponent} from './restaurant.component';
import { routing } from './restaurant.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    RestaurantComponent
  ]
})
export class RestaurantModule { }
