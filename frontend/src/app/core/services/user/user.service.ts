import { Injectable } from '@angular/core';
import { ConnectService } from './../connect/connect.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _schema = 'user'

  private user: {
    nickname: String,
    email: String
  } = null

  constructor
  (
    private connect: ConnectService
  ) { }

  setUser(nickname, email) {
    this.user = {
      nickname: nickname,
      email: email
    }

    return this.SaveUser(name, email)
  }

  SaveUser(nickname, email) {
    return this.connect.post(this._schema, {
      nickname: nickname,
      email: email,
      anonymous: (nickname + email == "") ? true : false
    })
  }

  Get(email) {
    return this.connect.get(this._schema, {
      email: email
    })
  }

  getUser() { return this.user }
}