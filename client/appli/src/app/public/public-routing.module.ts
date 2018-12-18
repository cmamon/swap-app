import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../home-page/home-page.component';
import { LoginComponent } from '../auth/login/login.component';
import { PublicComponent } from './public.component';
import { ProposeComponent } from '../propose/propose.component';
import { ResearchSectionComponent } from '../research/research-section/research-section.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { UserPanelComponent } from '../users/user-panel/user-panel.component';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', component: HomePageComponent },
            { path: 'account', component: UserPanelComponent },
            { path: 'login', component: LoginComponent },
            { path: 'propose', component: ProposeComponent },
            { path: 'search', component: ResearchSectionComponent },
            { path: 'signup', component: SignupComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class PublicRoutingModule { }
