import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule} from '@angular/material';

const MATERIAL_MODULES = [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})

export class SwapMaterialModule { }
