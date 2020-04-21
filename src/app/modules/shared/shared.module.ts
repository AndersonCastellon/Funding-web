import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftDaysPipe } from './pipes/left-days.pipe';



@NgModule({
  declarations: [LeftDaysPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
