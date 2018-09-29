import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {CatalogComponent} from './catalog.component';
import { routing } from './catalog.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    CatalogComponent
  ]
})
export class CatalogModule { }
