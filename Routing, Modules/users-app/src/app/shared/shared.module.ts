import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    TimeComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
