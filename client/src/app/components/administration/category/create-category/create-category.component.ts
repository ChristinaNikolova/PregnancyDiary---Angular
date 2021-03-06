import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoriesService } from 'src/app/core/services/category/categories.service';
import { isUrlsPictureInvalid } from 'src/app/core/validators/imageValidator';

const NAME_MIN_LEN = 3;
const NAME_MAX_LEN = 50;

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  get f() {
    return this.createForm.controls;
  }

  get validPictureUrl(): boolean {
    return isUrlsPictureInvalid(this.createForm.value.picture);
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(NAME_MIN_LEN), Validators.maxLength(NAME_MAX_LEN)]],
      picture: ['', Validators.required],
    });
  }

  create(): void {
    if (
      this.createForm.invalid ||
      isUrlsPictureInvalid(this.createForm.value.picture)
    ) {
      return;
    }

    this.categoriesService.create(this.createForm.value).subscribe((_) => {
      this.router.navigate(['/administration/categories']);
    });
  }
}
