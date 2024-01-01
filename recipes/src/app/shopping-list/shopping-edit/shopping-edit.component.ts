import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') recipeName!: ElementRef;
  @ViewChild('amountInput') recipeAmount!: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {
  }
  onAddToRecipe() {
    const newIngredient = new Ingredient(
      this.recipeName.nativeElement.value,
      this.recipeAmount.nativeElement.value
    );
    this.shoppingListService.addNewIngredient(newIngredient);
  }
}
