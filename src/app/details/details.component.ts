import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
	selector: "app-details",
	templateUrl: "./details.component.html",
	styleUrls: ["./details.component.scss"]
})

export class DetailsComponent implements OnInit, OnDestroy {
	private urlRoute: any;
	private userData: any;

	constructor(private router: Router, private route: ActivatedRoute) {}

	/**
	 * Get the URL query parameters and pass as data to userData attribute
	 * This method executes on ngOnInit event of Angular component
	 * @memberof DetailsComponent
	 */
	ngOnInit() {
		this.urlRoute = this.route.params.subscribe(params => this.userData = params);
	}

	/**
	 * Destroy event of Angular Component
	 * @memberof DetailsComponent
	 */
	ngOnDestroy(): void {
		this.urlRoute.unsubscribe();
	}

	gotToProfileList() {
		this.router.navigate(["profile-list"]);
	}
}
