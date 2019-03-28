import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { ProfileListComponent } from "./profile-list/profile-list.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
	{ path: "profile-list", component: ProfileListComponent },
	{ path: "details", component: DetailsComponent },
	{ path: "", component: LoginComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
