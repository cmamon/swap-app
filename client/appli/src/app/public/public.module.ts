import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapMaterialModule } from '../swap-material/swap-material.module';

import { PublicRoutingModule } from './public-routing.module'

import { PublicComponent } from './public.component'

const modules = [
    CommonModule,
    PublicRoutingModule,
    SwapMaterialModule
];

@NgModule({
    declarations: [
        PublicComponent,
    ],
    imports: modules,
    exports: modules
})

export class PublicModule { }
