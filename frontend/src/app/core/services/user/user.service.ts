import { Injectable } from '@angular/core';
import { ConnectService } from './../connect/connect.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _schema = 'user'

  private user: {
    nickname: String,
    email: String,
    anonymous: Boolean
  } = null

  constructor
  (
    private connect: ConnectService
  ) { }

  setUser(nickname, email) {
    this.user = {
      nickname: nickname,
      email: email,
      anonymous: false
    }

    return this.SaveUser(name, email)
  }

  setAnonimousUser() {
    this.user = {
      nickname: "",
      email: "",
      anonymous: true
    }
  }

  UserExists(email) {
    return new Promise((resolve, reject) => {
      this.connect.get(`user`, {email}).subscribe((res: any[]) => {
        resolve(res.length ? res[0] : false)
      }, err => resolve(false))
    })
  }

  async SaveUser(nickname, email) {
    const userExists = await this.UserExists(email)

    if (!userExists) {
      return this.connect.post(this._schema, {
        nickname: nickname,
        email: email
      })
    }
    else {
      return of(userExists)
    }
  }

  Get(email) {
    return this.connect.get(this._schema, {
      email: email
    })
  }

  getUser() { return this.user }
}