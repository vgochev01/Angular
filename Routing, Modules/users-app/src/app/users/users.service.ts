import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  loadUsers() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  loadUser(id: number){
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
