import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: {
    name: String,
    email: String
  } = null

  constructor() { }

  setUser(name, email) {
    this.user = {
      name: name,
      email: email
    }
  }

  getUser() { return this.user }
}