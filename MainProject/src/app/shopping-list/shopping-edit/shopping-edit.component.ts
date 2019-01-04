import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListSerice } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  newIngredient: Ingredient;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('f') slForm: NgForm;



  constructor(private shoppingListService: ShoppingListSerice) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    this.newIngredient = new Ingredient(form.value.name, form.value.amount);

    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, this.newIngredient);
    }else {
      this.shoppingListService.addIngredient(this.newIngredient);
    }
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
