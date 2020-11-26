import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
     MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ...materialModules,
    MatFormFieldModule,
    MatInputModule,
  ],
})

export class AngularMaterialModule { }