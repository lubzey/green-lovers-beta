import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { PlantInstance } from './../models/plant-instance.model';

@Injectable()
export class PlantInstancesService {
  seedPlantInstances: FirebaseListObservable<any[]>;
  seedPlant: FirebaseObjectObservable<any>;
  plantInstances: FirebaseListObservable<PlantInstance[]>;

  constructor(private db: AngularFireDatabase) {
  }

  removeAll() {
    this.db.list('/plant-instances').remove();
  }

  getPlants(term?: string) {
    this.plantInstances = this.db.list('/plant-instances');

    return term ?
      this.plantInstances
        .map(x => x.filter(x =>
          x.commonName.toLowerCase()
            .includes(term.toLowerCase())))
      : this.plantInstances;
  }

  changePlantOwner(key: string, newOwner: string) {
    this.plantInstances.update(key, { owner: newOwner })
      .then(x => console.log('Plant edited'))
      .catch(error => console.log(error));
  }

  deletePlantInstance(key: string) {
    this.plantInstances.remove(key)
      .then(x => console.log('Plant removed'))
      .catch(error => console.log(error));
  }

  seed() {
    this.seedPlantInstances = this.db.list('/plant-instances');

    this.seedPlantInstances.push({
      name: 'vercheto',
      birthdate: '01.09.2014',
      owner: 'lubzey',
      commonName: 'Aloe vera'
    });

    this.seedPlantInstances.push({
      name: 'palmichka',
      birthdate: 'unknown',
      owner: 'lubzey',
      commonName: 'Dragon tree'
    });

    this.seedPlantInstances.push({
      name: 'princ limon',
      birthdate: '03.03.2016',
      owner: 'lubzey',
      commonName: 'Lemon'
    });
  }

  addPlant() {
    this.seedPlantInstances.push({
      name: 'Black pearl',
      birthdate: '01.02.2015',
      owner: 'lubzey',
      commonName: 'Chilli pepper'
    });
  }
}
