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
  errorLoadingUsers: boolean = false;

  constructor(
    public usersService: UsersService
  ) {}

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers(search: string = ''): void {
    this.users = undefined;
    this.errorLoadingUsers = false;

    this.usersService.loadUsers(search).subscribe(
        users => this.users = users,
        error => {
          console.error(error);
          this.errorLoadingUsers = true;
        },
        () => console.log('Load user stream completed!')
      );
  }

  reloadButtonHandler(): void {
    this.loadUsers();
  }
  searchButtonHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);
  }
}
