import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private _url = environment.url

  constructor
  (
    private _httpClient: HttpClient
  ) 
  { }

  get(schema, params = {}) {
    return this._httpClient.get(this._url + schema, {
      params: params
    })
  }

  post(schema, body) {
    return this._httpClient.post(this._url + schema, body)
  }
}
