import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserRoutingModule } from '../user/user-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from '../user/user.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [UserService]
})

export class CoreModule { }
