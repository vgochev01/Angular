import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] | undefined;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.users = undefined;
    this.userService.loadUsers().subscribe(users => this.users = users);
  }

}
