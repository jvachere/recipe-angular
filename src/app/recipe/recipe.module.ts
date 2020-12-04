import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from './../shared/shared.module';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    RecipeCreateComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
  ]
})
export class RecipeModule { }
