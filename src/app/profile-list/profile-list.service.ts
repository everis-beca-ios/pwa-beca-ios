import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  url: string = `${environment.baseUrl}/users`;

  constructor(
    private _httpclient: HttpClient
  ) { }

  getProfileData(){    
    return localStorage.getItem('username');
  }
  
  getProfileList() {
    return this._httpclient.get(this.url).toPromise();
  }
}
