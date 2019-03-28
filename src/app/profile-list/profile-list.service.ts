import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map } from "rxjs/operators";

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
    return navigator.onLine ? this.getProfileListApi() : this.getStorageData();
  }

  getProfileListApi() {
    return this._httpclient.get(this.url)
    .pipe(map(data => {
      this.saveData(data);
      return data;
    })).toPromise();
    
  }

  getStorageData() {
    return JSON.parse(localStorage.getItem('profile-list'));
  }


  saveData(data: any) {
    localStorage.setItem('profile-list', JSON.stringify(data));
  }

}
