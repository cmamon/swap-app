import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';


import { UserListComponent } from '../users/user-list/user-list.component';
import { AdminComponent } from './admin.component';

const modules = [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
];

@NgModule({
    declarations: [
        UserListComponent,
        AdminComponent
    ],
    imports: modules,
    exports: modules
})

export class AdminModule { }
