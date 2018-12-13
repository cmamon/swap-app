import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from '../authentication/authentication.component';
import { PublicComponent } from './public.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ResearchSectionComponent } from '../research/research-section/research-section.component';

const routes : Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: 'auth', component: AuthenticationComponent },
            { path: 'sign-up', component: RegistrationComponent },
            { path: 'search', component: ResearchSectionComponent },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class PublicRoutingModule { }
