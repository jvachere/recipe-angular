import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient) { }

  createRecipe(recipe): Recipe {
    this.recipes.push(recipe);
    return recipe;
  }

  deleteRecipe(id: string): void {
    const index = this.recipes.findIndex(x => x.id === id);
    if (index !== -1){
      this.recipes.splice(index, 1);
    }
  }

  getRecipe(id: string): Observable<Recipe> {
    //return of(this.recipes[0]) ;
    return this.httpClient.get(`${environment.apiEndpoint}/recipe/${id}`) as Observable<Recipe>;
  }

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get(`${environment.apiEndpoint}/recipes`) as Observable<Recipe[]>;
  }
}
