import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class MaterialDesignModule { }
