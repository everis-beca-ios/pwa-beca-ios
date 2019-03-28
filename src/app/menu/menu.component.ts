import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-menu",
	templateUrl: "./menu.component.html",
	styleUrls: ["./menu.component.scss"]
})

export class MenuComponent implements OnInit {
	@Input() userProps: object;
	@Input() openMenu: string;

	constructor() {}

	ngOnInit() {}

	closeMenu() {
		this.openMenu = '';

		console.log('this.openMenu', this.openMenu);
	}
}
