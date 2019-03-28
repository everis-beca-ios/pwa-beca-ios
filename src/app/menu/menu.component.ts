import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';

@Component({
	selector: "app-menu",
	templateUrl: "./menu.component.html",
	styleUrls: ["./menu.component.scss"]
})

export class MenuComponent implements OnInit {
	@Input() userProps: object;
	@Input() openMenu:boolean
	@Output() close = new EventEmitter()

	constructor(
		private router: Router
	) { }

	ngOnInit() {}

	/**
	 * Close menu clicking inside backdrop
	 * @memberof MenuComponent
	 */
	closeMenu() {
		this.openMenu = false;
		this.close.emit();
	}

	/**
	 * Clear all data inside local storage and redirect the user to login route
	 * @memberof MenuComponent
	 */
	logoutUser() {
		localStorage.clear();
		this.router.navigate(["login"]);
	}
}
