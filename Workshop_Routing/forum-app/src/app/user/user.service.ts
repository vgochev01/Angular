import { Injectable } from '@angular/core';
import { IUser } from '../shared/interface/user';

@Injectable()
export class UserService {
  
  user: IUser | undefined;

  get isLogged() : boolean {
    return this.user != undefined;
  }

  constructor() {
    const userLocalStorage = localStorage.getItem('<USER>');
    if(userLocalStorage != null) {
      this.user = JSON.parse(userLocalStorage);
    }
  }

  login(email: string, password: string): void{
    this.user = {
      username: 'Test',
      email,
      password
    }

    localStorage.setItem('<USER>', JSON.stringify(this.user));
  };

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }

}
