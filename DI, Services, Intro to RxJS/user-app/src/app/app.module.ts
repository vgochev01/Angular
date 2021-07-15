import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: UsersService,
    useClass: UsersService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
