import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListSerice } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('Nacho', 
                    'This is just a test recipe', 
                    'http://www.seriouseats.com/images/2017/11/20171124-mushroom-recipes-roundup-03.jpg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('French Fries', 15)
                    ]),
        new Recipe('Queso', 
                    'This is just a test recipe', 
                    'http://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/33/64/35/J9XFMFd0Smi39ZgDapm4_queso%20(2%20of%204).jpg',
                    [
                        new Ingredient('Buns', 1),
                        new Ingredient('Cheese', 15)
                    ])
    ];

    constructor(private shoppingListService: ShoppingListSerice){}

    setRecipes(recipes){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
        // we are returning the copy of the array not the actual array making it really private. So you can only have access it through this method;

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);        
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteReceipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}