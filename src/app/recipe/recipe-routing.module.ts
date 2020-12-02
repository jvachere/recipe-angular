import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'create',
    component: RecipeCreateComponent
  },
  {
    path: ':id',
    component: RecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
