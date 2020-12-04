import { Recipe } from './../shared/recipe';
import { Component, OnInit } from '@angular/core';

import { BaseComponent } from './../../shared/base-component';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent extends BaseComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
    super();
  }

  ngOnInit(): void {
    this.baseSubscribe(this.recipeService.getRecipes(), (recipes) => this.recipes = recipes);
  }
}
