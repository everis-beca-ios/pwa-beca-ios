import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup
  formIsvalid: boolean

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {

  }


  ngOnInit() {
    this.loginFrom = this.fb.group({
      id: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      passwd: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  get userId() {
    return this.loginFrom.controls.id.valid || this.loginFrom.controls.id.pristine;
  }
  get userPass() {
    return this.loginFrom.controls.passwd.valid || this.loginFrom.controls.passwd.pristine;
  }

  isValid() {
    const formData = new FormData()
    if (this.loginFrom.invalid) { this.formIsvalid = false }
    else {
      this.formIsvalid = true
      formData.append('id', this.loginFrom.controls.id.value); formData.append('passwd', this.loginFrom.controls.passwd.value);
      this.http.post('https://beca-sn-pwa-instantapps-api.herokuapp.com/login', formData).subscribe(
        res => {
          if (res == null) { this.formIsvalid = false }
          else {
            localStorage.setItem('username', res['logado']['name']);
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigate(['profile-list']);
          }
        },
      )
    }
  }

}
