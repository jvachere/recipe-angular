import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from './../../shared/base-component';
import { RecipeService } from './../recipe.service';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent extends BaseComponent implements OnInit, AfterViewInit {
  recipe: Recipe = null;
  scrollThreshold = 0;
  leftPaneFixed = true;
  titleHeight = 232;
  smMaxWidth = 959;
  toolbarHeight = 84;

  constructor(
    public recipeService: RecipeService,
    public activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngAfterViewInit(): void {
    const ingredientPane = document.getElementById('ingredient-pane');

    this.onLoad(ingredientPane);

    window.addEventListener('resize', () => {
      this.onResizeEvent(ingredientPane);
    });

    window.addEventListener('scroll', () => {
      this.onScrollEvent(ingredientPane);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params =>
        this.baseSubscribe(this.recipeService.getRecipe(params.id), (recipe) => this.recipe = recipe)
      );
  }

  onLoad(ingredientPane): void {
    this.titleHeight = document.getElementById('heading').clientHeight + 10;

    if (window.innerWidth > this.smMaxWidth) {
      ingredientPane.classList.add('fixed');
    }
  }

  onResizeEvent(ingredientPane): void {
    if (window.innerWidth > this.smMaxWidth) {
      if (this.leftPaneFixed) {
        this.fixIngredientPane(ingredientPane);
      }
      else {
        this.unFixIngredientPane(ingredientPane);
      }
    }
    else {
      ingredientPane.classList.remove('fixed');
      ingredientPane.classList.remove('scroll-margin');
      ingredientPane.style['margin-top'] = null;
    }

    this.onScrollEvent(ingredientPane);
  }

  onScrollEvent(ingredientPane): void {
    if (window.innerWidth > this.smMaxWidth) {
      if (this.leftPaneFixed) {
        if (window.scrollY >= ((window.innerHeight - this.toolbarHeight) * .6) - this.titleHeight) {
          this.unFixIngredientPane(ingredientPane);
          this.leftPaneFixed = false;
        }
      }
      else {
        if (window.scrollY < ((window.innerHeight - this.toolbarHeight) * .6) - this.titleHeight) {
          this.fixIngredientPane(ingredientPane);
          this.leftPaneFixed = true;
        }
      }
    }
  }

  unFixIngredientPane(ingredientPane): void {
    ingredientPane.classList.remove('fixed');
    ingredientPane.classList.add('scroll-margin');
    ingredientPane.style['margin-top'] = `${((window.innerHeight - this.toolbarHeight) * .6) - this.titleHeight}px`;
  }

  fixIngredientPane(ingredientPane): void {
    ingredientPane.classList.add('fixed');
    ingredientPane.classList.remove('scroll-margin');
    ingredientPane.style['margin-top'] = null;
  }
}
