import { ShoppingListSerice } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription: Subscription;
  constructor(private shoppingListSerice: ShoppingListSerice) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSerice.getIngredients();
    this.subscription = this.shoppingListSerice.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[])=>{
          this.ingredients = ingredients;
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEditItem(index: number){
    this.shoppingListSerice.startEditing.next(index);
  } 


}
