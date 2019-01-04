import { Ingredient } from "../shared/ingredient.model";

// Whenever we have object that is being used in multiple places, 
// we need to create model for that object which sets how the object should look like
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}