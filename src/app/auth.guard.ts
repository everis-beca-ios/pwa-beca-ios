import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private router : Router){}

    canActivate(): boolean {
        return this.verifyLogin();
    }

    verifyLogin(): boolean {
        if(this.isLoggedIn()){
          return true;
        }
        this.router.navigate(['login']);
        return false;
    }

    public isLoggedIn(): boolean{
        if(localStorage.getItem('isLoggedIn')){
          return true;
        }
        return false;
    }
}