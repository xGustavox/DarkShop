import { Injectable } from '@angular/core';
import { ConnectService } from '../connect/connect.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _schema = 'user'

  private user: {
    name: String,
    email: String
  } = null

  constructor
  (
    private connect: ConnectService
  ) { }

  setUser(name, email) {
    this.user = {
      name: name,
      email: email
    }

    return this.SaveUser(name, email)
  }

  SaveUser(name, email) {
    return this.connect.post(this._schema, {
      nickname: name,
      email: email,
      anonymous: (name + email == "") ? true : false
    })
  }

  Get(email) {
    return this.connect.get(this._schema, {
      email: email
    })
  }

  getUser() { return this.user }
}