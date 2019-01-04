import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from './../recipe.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipe-list.component.html',
    styles: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
    recipes: Recipe[] = [];
    subscription:Subscription;

    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute){}
    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
        this.subscription = this.recipeService.recipeChanged // This Subject was sent from the service, whenever anything changes it will get fired 
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipes = recipes;
                }
            );
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}