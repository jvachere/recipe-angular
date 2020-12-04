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
    recipeIngredients: this.fb.array([
      this.fb.group({
        quantity: [''],
        unit: [''],
        name: [''],
        isOptional: [false],
        note: ['']
      })
    ]),
    recipeSteps: this.fb.array([
      this.fb.group({
        text: ['']
      })
    ]),
  });
  ingredientColumns: string[] = ['quantity', 'unit', 'name', 'isOptional', 'note'];

  stringify(thing){
    return JSON.stringify(thing);
  }

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

  addIngredient(): void {
    this.recipeIngredients.push(this.fb.group({
      quantity: [''],
      unit: [''],
      name: [''],
      isOptional: [''],
      note: ['']
    }));
  }

  addStep(): void {
    this.recipeSteps.push(this.fb.group({
      text: ['']
    }));
  }

  removeFormArrayElement(index, array): void {
    array.removeAt(index);
  }



  onSubmit(): void {
    console.warn(this.recipeForm.value);
  }
}
