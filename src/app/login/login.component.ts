import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

/**
 * Send login form data and check if the respective user exist inside API
 * @export LoginComponent
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
	login: FormGroup;

	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private router: Router
	) {}

	/**
	 * Init event of Angular component
	 * @memberof LoginComponent
	 */
	ngOnInit() {
		this.login = this.fb.group({
			id: ["", Validators.required],
			passwd: ["", Validators.required]
		});
	}

	/**
	 * Send data using POST method to users API and check if API returns a filled response
	 * In case of return a filled response, this method set a local storage item called [username] with profile details
	 * And a local storage item called [isLogged] that receives a boolean with true value
	 * In case of an empty return, we return inside console the error pointed of the API
	 * @memberof LoginComponent
	 */
	isValid() {
		const formData = new FormData();

		formData.append("id", this.login.controls.id.value);
		formData.append("passwd", this.login.controls.passwd.value);

		this.http.post("https://beca-sn-pwa-instantapps-api.herokuapp.com/login", formData).subscribe(res => {
			localStorage.setItem("userLogged", JSON.stringify(res["logado"]));
			localStorage.setItem("isLoggedIn", "true");
			this.router.navigate(["profile-list"]);
		}, err => console.log('error', err));
	}
}
