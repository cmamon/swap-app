import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwapMaterialModule } from '../swap-material/swap-material.module';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';

const modules = [
    CommonModule,
    FormsModule,
    SwapMaterialModule,
    AdminRoutingModule
];

@NgModule({
    declarations: [
        AdminComponent,
        UserListComponent,
    ],
    imports: modules,
    exports: modules
})

export class AdminModule { }
