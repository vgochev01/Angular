import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = [
    {
      name: 'Ivan',
      age: 20
    },
    {
      name: 'Georgi',
      age: 24
    },
    {
      name: 'Pesho',
      age: 17
    }
  ];

  addUserHandler(userData: IUser): void{
    this.users.push(userData);
  }
}
