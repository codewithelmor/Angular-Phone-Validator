# Validator

In Angular, **`validators`** are used to perform client-side validation in reactive forms. Validators are functions that take a form control as an input and return a validation result object. These validators can be applied to form controls to enforce certain rules or constraints on the input data.

Angular provides a set of built-in validators that you can use, and you can also create custom validators to suit your specific needs.

Here's an example of using built-in validators in Angular:

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <label for="name">Name:</label>
      <input type="text" id="name" formControlName="name">

      <div *ngIf="myForm.get('name').hasError('required') && myForm.get('name').touched">
        Name is required.
      </div>

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email">

      <div *ngIf="myForm.get('email').hasError('email') && myForm.get('email').touched">
        Please enter a valid email address.
      </div>

      <button type="submit" [disabled]="myForm.invalid">Submit</button>
    </form>
  `
})
export class MyFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    // Handle form submission
    console.log(this.myForm.value);
  }
}

```

In this example, we're using the **`Validators.required`** and **`Validators.email`** built-in validators for the "name" and "email" form controls, respectively. The error messages are displayed conditionally based on whether the form control has the corresponding error and has been touched.

You can also create custom validators. Here's a simple example:

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}

```

You can then use this custom validator in your form:

```typescript
this.myForm = this.fb.group({
  name: ['', [Validators.required, forbiddenNameValidator(/bob/)]],
  email: ['', [Validators.required, Validators.email]]
});

```

In this example, the "name" control will be invalid if the value contains "bob".

# Screenshot

![2023-11-18 14-40-38](https://github.com/codewithelmor/Angular-Phone-Validator/assets/44918452/8235686b-40b4-4d5b-97f1-03d70332b876)

# Commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
