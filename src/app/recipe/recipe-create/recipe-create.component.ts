import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  recipeForm = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
    details: new FormControl(''),
    prepTime: new FormControl(''),
    bakeTime: new FormControl(''),
    inactiveTime: new FormControl(''),
    //tags: new FormControl(''),
    quantity: new FormControl(''),
    yieldString: new FormControl(''),
    //recipeSteps: new FormControl(''),
    //recipeIngredients: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.warn(this.recipeForm.value);
  }
}
