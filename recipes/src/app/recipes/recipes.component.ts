import { Component, OnInit } from "@angular/core";
import {Recipe} from "./recipe.model";

@Component({
  selector: 'recipes',
  styleUrl: 'recipes.component.css',
  templateUrl: 'recipes.component.html'
})

export class RecipesComponent implements OnInit{
  selectedRecipe!: Recipe;
constructor() {
}
ngOnInit() {
}

}
