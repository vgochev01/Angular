import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { HttpClientModule } from '@angular/common/http'
import { UsersService } from './users.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRouterModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRouterModule
  ],
  providers: [UsersService],
  exports: [
    UserListComponent
  ]
})
export class UsersModule { }
