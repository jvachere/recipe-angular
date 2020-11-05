import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { DurationPipe } from './pipes/duration.pipe';



@NgModule({
  declarations: [
    DurationPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    DurationPipe,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class SharedModule { }
