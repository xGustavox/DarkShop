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

  put (schema, body) {
    return this._httpClient.put(this._url + schema, body)
  }

  delete(schema, id) {
    return this._httpClient.delete(this._url + schema + id)
  }
}
