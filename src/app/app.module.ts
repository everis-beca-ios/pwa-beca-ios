import { BrowserModule } from "@angular/platform-browser";
import {CommonModule} from "@angular/common"
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./details/details.component";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProfileListComponent } from "./profile-list/profile-list.component";
import { AuthGuard } from "./auth.guard";
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [
		AppComponent,
		DetailsComponent,
		LoginComponent,
		ProfileListComponent,
		MenuComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
    ReactiveFormsModule,
    CommonModule
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent]
})

export class AppModule {}
