import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }


  ngOnInit() {
    this.login = this.fb.group({
      id: ['', Validators.required],
      passwd: ['', Validators.required]
    })
  }

  isValid() {
    console.log(this.login)
    const formData = new FormData()
    formData.append('id', this.login.controls.id.value); formData.append('passwd', this.login.controls.passwd.value);
    console.log( formData)
    this.http.post('https://beca-sn-pwa-instantapps-api.herokuapp.com/login', formData).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log('error')
      }
    )
  }

}
