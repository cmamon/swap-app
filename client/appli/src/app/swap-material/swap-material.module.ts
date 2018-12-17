import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

const MATERIAL_MODULES = [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})

export class SwapMaterialModule { }
