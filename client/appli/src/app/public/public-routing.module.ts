import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ResearchSectionComponent } from '../research/research-section/research-section.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: 'sign-up', component: RegistrationComponent },
            {
                path: 'search',
                component: ResearchSectionComponent
            },
            { path: 'login', component: LoginComponent},
            { path: 'signup', component: SignupComponent}
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class PublicRoutingModule { }
