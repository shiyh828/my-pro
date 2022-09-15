import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSliderModule } from '@angular/material/slider'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatIconModule } from '@angular/material/icon'


const Material = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  FormsModule,
  MatSelectModule,
  MatRadioModule,
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatDialogModule,];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material],
  exports: [Material]
})
export class MaterialModule { }