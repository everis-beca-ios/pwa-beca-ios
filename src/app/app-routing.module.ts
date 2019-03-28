import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { ProfileListComponent } from "./profile-list/profile-list.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
	{ path: "", redirectTo: "/profiles", pathMatch: "full" },
	{
		path: "profiles",
		component: ProfileListComponent,
		canActivate: [AuthGuard]
	},
	{ path: "details", component: DetailsComponent, canActivate: [AuthGuard] },
	{ path: "login", component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
