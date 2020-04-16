import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();//on ajoute une propriété = un nouvel EventEmitter (core) auquel on y passe une string que l'on instancie avec les ()
  //on met le Output pour que ce soit écouter par le composant parent (app-component)
  onSelect(feature:string){ //on ajoute la fonction de onSelect avec comme argument "feature" de type string
    this.featureSelected.emit(feature); //emit = event au click sur le featureSelected, on affiche le feature
  }
}
