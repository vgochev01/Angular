import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./interfaces/user";

@Injectable()
export class UsersService {

  users: IUser[] = [];

  constructor(
    private http: HttpClient
  ) {}

  loadUsers(search: string = ''){
    const query: string = search ? `?email_like=${search}` : '';
    const url = `https://jsonplaceholder.typicode.com/users${query}`;
    return this.http.get<IUser[]>(url);
  }
  
}
