import { Injectable } from '@angular/core';
import { User } from '../@types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: User[] = [
    {
      email: 'teste@gmail.com',
      name: 'Gustavo',
      password: '123Mudar*'
    }
  ];

  constructor() { }

  get users() {
    return this._users;
  }

  set users(users: User[]) {
    this._users = users;
  }

  addUser(user: User): boolean {
    if (!this._users.some(u => u.email = user.email)) {
      this._users.push(user);
      return true;
    } else {
      return false;
    }
  }

  findByEmail(email: string): User | undefined {
    return this._users.find(u => u.email === email);
  }

}
