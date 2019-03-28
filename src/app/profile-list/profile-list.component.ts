import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

/**
 * Render a list of users fetching an API that returns an array of objects
 * @export ProfileListComponent
 * @class ProfileListComponent
 * @implements {OnInit}
 */
@Component({
	selector: "app-profile-list",
	templateUrl: "./profile-list.component.html",
	styleUrls: ["./profile-list.component.scss"]
})

export class ProfileListComponent implements OnInit {
	profiles: any;
	name: string;
	url: string = "https://beca-sn-pwa-instantapps-api.herokuapp.com/users";
	imageDefault: string = "https://cdn3.vectorstock.com/i/1000x1000/38/42/hacker-character-avatar-icon-vector-11573842.jpg";

	constructor(
		private router: Router,
		private activateRouter: ActivatedRoute,
		private httclient: HttpClient
	) {}

	/**
	 * Init event of ProfileListComponent
	 * @memberof ProfileListComponent
	 */
	ngOnInit() {
		this.getProfileData();
		this.getProfileList();
	}

	/**
	 * Get logged profile data inside application from local storage item called username
	 * @memberof ProfileListComponent
	 */
	getProfileData() {
		this.name = localStorage.getItem("username");
	}

	/**
	 * Consume profiles API route and fetch inside profiles attribute of this component
	 * @memberof ProfileListComponent
	 */
	getProfileList() {
		this.httclient.get(this.url).subscribe(response => this.profiles = response);
	}

	/**
	 * Attach event to profile card route navigate to details route
	 * @param {object} profile an object with a single profile details
	 * @memberof ProfileListComponent
	 */
	showDetails(profile: any) {
		this.router.navigate(["details", profile]);
	}
}
