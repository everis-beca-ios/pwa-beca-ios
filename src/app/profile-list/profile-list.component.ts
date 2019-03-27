import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  profiles: any;
  name: string;
  url: string = 'https://beca-sn-pwa-instantapps-api.herokuapp.com/users';
  imageDefault: string = 'https://cdn3.vectorstock.com/i/1000x1000/38/42/hacker-character-avatar-icon-vector-11573842.jpg';
  constructor(
    private router: Router, private activateRouter: ActivatedRoute, private httclient: HttpClient
  ) {}

  ngOnInit() {
    this.getProfileData();
    this.getProfileList();
  }

  getProfileData(){    
    this.name = localStorage.getItem('username');
  }

  getProfileList() {
    this.httclient.get(this.url).subscribe(response => {
      this.profiles = response;
    });
  }

  showDetails(profile: any){
    this.router.navigate(['details', profile]);
  }

}
