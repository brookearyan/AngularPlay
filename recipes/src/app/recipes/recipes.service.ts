import { Recipe } from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipesService {
  constructor(private shoppingListService: ShoppingListService) {
  }
  // @ts-ignore
  private recipes: Recipe[] = [
    new Recipe('Apple Crumble',
      'Delicious Family Recipe',
      'https://www.southernliving.com/thmb/pxGUeE2th2DYJddxjS-7VG7RcDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Apple_Crumb_010-b62cfe38808c42328df147e29d669472.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Butter', 4)
      ]),
    new Recipe('Cherry Hand Pies',
      'Delicious Family Recipe',
      'https://www.southernliving.com/thmb/pxGUeE2th2DYJddxjS-7VG7RcDM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Apple_Crumb_010-b62cfe38808c42328df147e29d669472.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Butter', 4)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }// to return only a copy and protect our array

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
