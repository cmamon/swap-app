import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwapMaterialModule } from '../swap-material/swap-material.module';

import { AdminRoutingModule } from './admin-routing.module';

import { UserListComponent } from '../users/user-list/user-list.component';
import { AdminComponent } from './admin.component';

const modules = [
    CommonModule,
    FormsModule,
    SwapMaterialModule,
    AdminRoutingModule
];

@NgModule({
    declarations: [
        UserListComponent,
        AdminComponent
    ],
    imports: modules,
    exports: modules,
})

export class AdminModule { }
