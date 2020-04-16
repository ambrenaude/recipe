import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe'; //on store le feature qui doit etre affiché - on y attribut le 'recipe' qui doit être le même ue dans le header template
  onNavigate(feature: string){//on ajoute la foncion onNavigate
    this.loadedFeature=feature // on attribut feature comme valeur du loadedFeature sélectionné
  }
}

