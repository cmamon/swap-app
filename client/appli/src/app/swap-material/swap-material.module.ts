import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule } from '@angular/material';

const MATERIAL_MODULES = [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})

export class SwapMaterialModule { }
