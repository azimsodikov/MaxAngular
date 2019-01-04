export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}
// Shortcut for defining a class
// export class Ingredient {
//     constructor(public name: string,public amount: number){}
// }