import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes/themes.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ContentService } from '../content.service';
import { ThemesRoutingModule } from './themes-routing.module';
import { CoreModule } from '../core/core.module';
import { UserService } from '../user/user.service';


@NgModule({
  declarations: [
    ThemeComponent,
    ThemesComponent,
    AddThemeComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule,
    CoreModule
  ],
  providers: [ContentService, UserService]
})

export class ThemeModule { }
