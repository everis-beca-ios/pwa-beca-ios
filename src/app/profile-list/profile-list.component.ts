import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileListService } from './profile-list.service';

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
	userProps: any;
	menuClass: boolean = false;
	profiles: any;
	imageDefault: string = 'https://cdn3.vectorstock.com/i/1000x1000/38/42/hacker-character-avatar-icon-vector-11573842.jpg';

	constructor(
		private _router: Router,
		private _profileListService: ProfileListService
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
		this.userProps = this._profileListService.getProfileData();
	}

	/**
	 * Consume profiles API route and fetch inside profiles attribute of this component
	 * @memberof ProfileListComponent
	 */
	async getProfileList() {
		this.profiles = await this._profileListService.getProfileList();

		console.log(this.profiles);
	}

	/**
	 * Attach event to profile card route navigate to details route
	 * @param {object} profile an object with a single profile details
	 * @memberof ProfileListComponent
	 */
	showDetails(profile: any) {
		this._router.navigate(['details', profile]);
	}

	/**
	 * Attach close event inside menu component
	 * @memberof ProfileListComponent
	 */
	feedback(close) {
		this.menuClass = false;
	}

	/**
	 * Attach open class inside menu component
	 * @memberof ProfileListComponent
	 */
	toggleMenuView() {
		this.menuClass = true;
	}
}
