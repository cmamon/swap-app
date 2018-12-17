import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapMaterialModule } from '../swap-material/swap-material.module';

import { PublicRoutingModule } from './public-routing.module';
import { ResearchModule } from '../research/research.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HeaderComponent } from '../header/header.component';
import { ProposeComponent } from '../propose/propose.component';
import { PublicComponent } from './public.component';
import { UserPanelComponent } from '../users/user-panel/user-panel.component';

const modules = [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SwapMaterialModule,
    ResearchModule
];

@NgModule({
    declarations: [
        HeaderComponent,
        ProposeComponent,
        PublicComponent,
        UserPanelComponent
    ],
    imports: modules,
    exports: modules,
    providers : [  ]
})

export class PublicModule { }
