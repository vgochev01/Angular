import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users: IUser[] | undefined;

  constructor(
    public usersService: UsersService
  ) {}

  ngOnInit(){
    this.users = this.usersService.getUsers();
  }

}
