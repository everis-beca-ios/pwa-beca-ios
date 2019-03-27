import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  profiles: any;
  constructor(
    private router: Router
  ) {
    this.profiles = [
      { name: 'Aluno 1', description: 'Descrição 1', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
      { name: 'Aluno 2', description: 'Descrição 2', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'}
    ];
   }

  ngOnInit() {
    this.getProfileList();
  }

  getProfileList(){

  }

  showDetails(profile: any){
    this.router.navigate(['details', profile]);
  }

}
