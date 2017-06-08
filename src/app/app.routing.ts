import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app-component/app.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PlantsWikiComponent } from './plants/plants.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-profile/user-edit/user-edit.component';
import { UserGardenComponent } from './user-profile/user-garden/user-garden.component';
import { UserPhotosComponent } from './user-profile/user-photos/user-photos.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'plants', component: PlantsWikiComponent },
    { path: 'user/edit', component: UserEditComponent },
    { path: 'user/garden', component: UserGardenComponent },
    { path: 'user/photos', component: UserPhotosComponent },
    { path: 'user/profile', component: UserProfileComponent },
	{ path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
