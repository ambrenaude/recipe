import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe; //on ajoute le decorator pour récupérer de l'extérieur les données
@Output() recipeSelected = new EventEmitter<void>();//on nomme la recette sélectionnée de l'extérieur et on utilise le EventEmitter de type void
  constructor() { }

  ngOnInit() {
  }


  // on ajoute la fonction Selected présente dans le template
  onSelected(){
    this.recipeSelected.emit();//on déclenche la recette sélectionnée et emet un appel
  }
}
