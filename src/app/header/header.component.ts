import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SideMenuComponent } from './../side-menu/side-menu.component';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() sideMenuEvent = new EventEmitter();

private sideMenu;
displayName;
  photoURL;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.authenticationService.getCurrentUser().subscribe(authState => {
      if (!authState) {
        this.displayName = null;
        this.photoURL = null;
        return;
      }
      // this.displayName = authState.auth.displayName;
      // this.photoURL = authState.auth.photoURL;
    });
  }

  callToSideMenu(){
    this.sideMenuEvent.emit(null)
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }
}
