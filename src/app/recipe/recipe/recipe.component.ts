import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { BaseComponent } from './../../shared/base-component';
import { RecipeService } from './../recipe.service';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent extends BaseComponent implements OnInit {
  recipe: Recipe = null;
  scrollThreshold = 0;
  leftPaneFixed = true;
  titleHeight = 232;
  smMaxWidth = 959;
  toolbarHeight = 84;
  recipeLoadedSubject = new BehaviorSubject(false);

  constructor(
    public recipeService: RecipeService,
    public activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  onLoad(): void {
    if (this.recipe) {
      const ingredientPane = document.getElementById('ingredient-pane');

      this.titleHeight = document.getElementById('heading').clientHeight + 10;

      if (window.innerWidth > this.smMaxWidth) {
        ingredientPane.classList.add('fixed');
      }

      window.addEventListener('resize', () => {
        this.onResizeEvent(ingredientPane);
      });

      window.addEventListener('scroll', () => {
        this.onScrollEvent(ingredientPane);
      });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params =>
        this.baseSubscribe(this.recipeService.getRecipe(params.id), (recipe) => {
          this.recipe = recipe;
          this.changeDetectorRef.detectChanges();
          this.onLoad();
        })
      );
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
