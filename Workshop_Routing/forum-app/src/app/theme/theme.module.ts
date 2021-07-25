import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { ThemeComponent } from './theme/theme.component';



@NgModule({
  declarations: [
    ThemesComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
