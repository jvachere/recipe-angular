import { BaseComponent } from './../../shared/base-component';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent extends BaseComponent implements OnInit {
  recipe = null;

  constructor(
    public recipeService: RecipeService,
    public activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params =>
        this.baseSubscribe(this.recipeService.getRecipe(+params.id), (recipe) => this.recipe = recipe)
      );
  }
}
