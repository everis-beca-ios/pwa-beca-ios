import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';  
import { ProfileListComponent } from './profile-list/profile-list.component';

const routes: Routes = [
  { path: 'profile-list', component: ProfileListComponent },
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
