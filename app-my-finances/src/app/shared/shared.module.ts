import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { BaseResourceListComponent } from './components/base-resource-list/base-resource-list/base-resource-list.component';

@NgModule({
  declarations: [BaseResourceListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
