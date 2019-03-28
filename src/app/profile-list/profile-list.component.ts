import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileListService } from './profile-list.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  public onlineOffline: boolean = navigator.onLine;

  profiles: any;
  name: string;
  imageDefault: string = 'https://cdn3.vectorstock.com/i/1000x1000/38/42/hacker-character-avatar-icon-vector-11573842.jpg';
  constructor(
    private _router: Router, 
    private _profileListService: ProfileListService
  ) {}

  ngOnInit() {
    this.getProfileData();
    if(this.onlineOffline){
      this.getProfileList();
    }
    console.log(this.onlineOffline)
  }
  
  getProfileData() {
    this.name = this._profileListService.getProfileData();
  }

  async getProfileList() {
    this.profiles = await this._profileListService.getProfileList();
  }

  showDetails(profile: any) {
    this._router.navigate(['details', profile]);
  }

}
