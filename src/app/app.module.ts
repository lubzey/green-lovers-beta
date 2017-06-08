import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-profile/user-edit/user-edit.component';
import { UserGardenComponent } from './user-profile/user-garden/user-garden.component';
import { UserPhotosComponent } from './user-profile/user-photos/user-photos.component';
import { PlantsWikiComponent } from './plants-wiki/plants-wiki.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { UsersService } from './shared/services/users.service';
import { PlantInstancesService } from './shared/services/plant-instances.service';
import { AuthenticationService } from './shared/services/authentication.service';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { firebaseConfig } from "../environments/firebase.config";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent,
    UserProfileComponent,
    UserEditComponent,
    UserGardenComponent,
    UserPhotosComponent,
    PlantsWikiComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PlantInstancesService, UsersService, AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }

