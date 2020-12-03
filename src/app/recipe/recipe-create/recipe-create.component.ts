import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent {
  recipeForm = this.fb.group({
    name: [''],
    author: [''],
    description: [''],
    details: [''],
    prepTime: [''],
    bakeTime: [''],
    inactiveTime: [''],
    tags: this.fb.array([]),
    quantity: [''],
    yieldString: [''],
    recipeIngredients: this.fb.array([]),
    recipeSteps: this.fb.array([]),
  });
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  get tags(): FormArray {
    return this.recipeForm.get('tags') as FormArray;
  }
  get recipeIngredients(): FormArray {
    return this.recipeForm.get('recipeIngredients') as FormArray;
  }
  get recipeSteps(): FormArray {
    return this.recipeForm.get('recipeSteps') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addTag(event): void {
    if ((event.value || '').trim()) {
      this.tags.push(this.fb.control(event.value));
    }
    if (event.input) {
      event.input.value = '';
    }
  }

  removeTag(index): void {
    this.tags.removeAt(index);

  }



  onSubmit(): void {
    console.warn(this.recipeForm.value);
  }
}
