import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {UserComponent} from './user.component';
import { routing } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
