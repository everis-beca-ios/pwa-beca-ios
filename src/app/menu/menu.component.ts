import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-menu",
	templateUrl: "./menu.component.html",
	styleUrls: ["./menu.component.scss"]
})

export class MenuComponent implements OnInit {
	@Input() userProps: object;
	@Input() openMenu:boolean
	@Output() close = new EventEmitter()


	constructor() {}

	ngOnInit() {}
	closeMenu() {
		this.openMenu = false;
		this.close.emit()
	}
}
