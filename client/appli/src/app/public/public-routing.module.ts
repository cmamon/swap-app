import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from '../authentication/authentication.component';
import { PublicComponent } from './public.component';

const routes : Routes = [
    { path: '', component: PublicComponent },
    { path: 'auth', component: AuthenticationComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class PublicRoutingModule { }
