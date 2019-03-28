import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  public onlineOffline: boolean = navigator.onLine;

  profiles: any;
  name: string;
  url: string = 'https://beca-sn-pwa-instantapps-api.herokuapp.com/users';
  imageDefault: string = 'https://cdn3.vectorstock.com/i/1000x1000/38/42/hacker-character-avatar-icon-vector-11573842.jpg';
  constructor(
    private router: Router, private activateRouter: ActivatedRoute, private httclient: HttpClient
  ) {
    // this.profiles = [
    //   { name: 'Aluno 1', description: 'Descrição 1', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    //   { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'}
    // ];
   }

  ngOnInit() {
    this.getProfileData();
    if(this.onlineOffline){
      this.getProfileList();
    }
    console.log(this.onlineOffline)
  }

  getProfileData(){
    this.activateRouter.params.subscribe(params => {
      this.name = params.name;
      caches.open('pwa-cache').then(function(cache) {
        cache.add('https://beca-sn-pwa-instantapps-api.herokuapp.com/users')
      })
    });
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
