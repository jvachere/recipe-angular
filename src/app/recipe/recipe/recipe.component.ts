import { BaseComponent } from './../../shared/base-component';
import { RecipeService } from './../recipe.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent extends BaseComponent implements OnInit {
  recipe = null;
  scrollThreshold = 0;
  leftPaneFixed = true;

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

    const ingredientPane = document.getElementById('ingredient-pane');

    this.onLoad(ingredientPane);

    window.addEventListener('load', () => {
      this.onLoad(ingredientPane);
    });

    window.addEventListener('resize', () => {
      this.onResizeEvent(ingredientPane);
    });

    window.addEventListener('scroll', () => {
      this.onScrollEvent(ingredientPane);
    });
  }

  onLoad(ingredientPane): void {
    if (window.innerWidth > 959) {
      ingredientPane.classList.add('fixed');
    }
  }

  onResizeEvent(ingredientPane): void {
    if (window.innerWidth > 959) {
      if (this.leftPaneFixed) {
        ingredientPane.classList.add('fixed');
        ingredientPane.classList.remove('scroll-margin');
      }
      else {
        ingredientPane.classList.remove('fixed');
        ingredientPane.classList.add('scroll-margin');
      }
    }
    else {
      ingredientPane.classList.remove('fixed');
      ingredientPane.classList.remove('scroll-margin');
    }

    this.onScrollEvent(ingredientPane);
  }

  onScrollEvent(ingredientPane): void {
    if (window.innerWidth > 959) {
      if (this.leftPaneFixed) {
        if (window.scrollY >= ((window.innerHeight - 84) * .6) - 232) {
          ingredientPane.classList.remove('fixed');
          ingredientPane.classList.add('scroll-margin');
          this.leftPaneFixed = false;
        }
      }
      else {
        if (window.scrollY < ((window.innerHeight - 84) * .6) - 232) {
          ingredientPane.classList.remove('scroll-margin');
          ingredientPane.classList.add('fixed');
          this.leftPaneFixed = true;
        }
      }
    }
  }
}
