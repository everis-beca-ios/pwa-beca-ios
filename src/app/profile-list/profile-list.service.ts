import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  url: string = `${environment.baseUrl}/users`;
  cacheName = 'pwa-cache';

  constructor(
    private _httpclient: HttpClient
  ) { }

  getProfileData(){    
    return localStorage.getItem('username');
  }
  
  getProfileList() {
    return navigator.onLine ? this.getProfileListApi() : this.getCacheData();
  }

  getProfileListApi() {
   // return this._httpclient.get(this.url)
    // .pipe(map(data => {
    //   this.saveCache(data);
    // })).toPromise();
    return this._httpclient.get(this.url)
    .pipe(map(data => {
      localStorage.setItem('profile-list', JSON.stringify(data));
      // caches.open(this.cacheName).then(cache => {
      //   cache.put('/profile-list', new Response(JSON.stringify(data)))
      // })
      return data;
    })).toPromise();
    
  }

  getCacheData() {
    return JSON.parse(localStorage.getItem('profile-list'));
    // console.log('getcCacheData');
    // caches.open(this.cacheName).then(cache => {
    //   console.log(cache);
    //   cache.match('/profile-list').then(item => {
    //     console.log(item)
    //   })
    // }, error => console.log(error))
  }


  saveCache(data: any) {
    
  }

  getProfileListCache() {
    
  }

}
