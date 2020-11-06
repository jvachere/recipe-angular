import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { recipes } from './recipe-data';
import { Recipe } from './shared/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes = recipes;

  constructor() { }

  createRecipe(recipe): Recipe {
    this.recipes.push(recipe);
    return recipe;
  }

  deleteRecipe(id: string): void {
    const index = this.recipes.findIndex(x => x.id === id);
    if(index !== -1){
      this.recipes.splice(index, 1);
    }
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(recipes.filter(x => x.id === id)[0]);
  }

  getRecipes(): Observable<Recipe[]> {
    return of(recipes).pipe(delay(300));
  }
}
