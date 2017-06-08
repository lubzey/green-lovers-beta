import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlantInstancesService } from './../shared/services/plant-instances.service';
import { UsersService } from './../shared/services/users.service';

import { PlantInstance } from './../shared/models/plant-instance.model';
import { User } from './../shared/models/user.model';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  userResults: Observable<any[]>;
  plantResults: Observable<any[]>;

  constructor(private usersService: UsersService,
    private plantInstanceService: PlantInstancesService,
    private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.userResults = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.usersService.getUsers(term)
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });

    this.plantResults = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.plantInstanceService.getPlants(term)
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }
}
