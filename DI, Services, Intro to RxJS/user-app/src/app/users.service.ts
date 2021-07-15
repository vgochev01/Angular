import { IUser } from "./interfaces/user";

export class UsersService {

  users: IUser[] = [
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
  };

  getUsers(){
    return this.users;
  }
}
