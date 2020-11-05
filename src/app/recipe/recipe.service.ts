import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { recipes } from './recipe-data';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipe(id: number): Observable<any[]> {
    return of(recipes.filter(x => x.id === id)[0]);
  }

  getRecipes(): Observable<any[]> {
    return of(recipes).pipe(delay(300));
  }
}
