import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapMaterialModule } from '../swap-material/swap-material.module';

import { PublicRoutingModule } from './public-routing.module';
import { ResearchModule } from '../research/research.module';

import { PublicComponent } from './public.component';
import { HeaderComponent } from '../header/header.component';

const modules = [
    CommonModule,
    PublicRoutingModule,
    SwapMaterialModule,
    ResearchModule
];

@NgModule({
    declarations: [
        HeaderComponent,
        PublicComponent
    ],
    imports: modules,
    exports: modules
})

export class PublicModule { }
