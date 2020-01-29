import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
// import { PhotosComponent } from './photos/photos.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: '', component: UserListComponent },
  // Comment out the following two routes once you have created the components
  // { path: 'photos', component: PhotosComponent },
  // { path: 'profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
