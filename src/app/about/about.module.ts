import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutRoutingModule
  ]
})
export class AboutModule { }
