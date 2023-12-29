import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Apple Crumble',
      'Delicious Family Recipe',
      'https://www.southernliving.com/thmb/pxGUeE2th2DYJddxjS-7VG7RcDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Apple_Crumb_010-b62cfe38808c42328df147e29d669472.jpg'),
    new Recipe('Cherry Hand Pies',
      'Delicious Family Recipe',
      'https://www.southernliving.com/thmb/pxGUeE2th2DYJddxjS-7VG7RcDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Apple_Crumb_010-b62cfe38808c42328df147e29d669472.jpg')
  ];
  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
