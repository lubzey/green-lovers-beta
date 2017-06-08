import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

@ViewChild('start') start;

menuOptions = ["Home", "Plants", "Garden",];

  constructor() { }

  ngOnInit() {
  }

toggle() : void {
this.start.toggle();
}

}
