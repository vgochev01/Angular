import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListaComponent } from './user-lista/user-lista.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';



@NgModule({
  declarations: [
    UserListaComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
