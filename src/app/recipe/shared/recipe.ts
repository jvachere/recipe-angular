import { RecipeIngredient } from './recipe-ingredient';
import { RecipeStep } from './recipe-step';

export class Recipe {
  id: string;
  name: string;
  author: string;
  createdDate: Date;
  modifiedDate: Date;
  description: string;
  details: string;
  prepTime: string;
  bakeTime: string;
  inactiveTime: string;
  tags: string[];
  quantity: number;
  yieldString: string;
  recipeSteps: RecipeStep[];
  recipeIngredients: RecipeIngredient[];
}


