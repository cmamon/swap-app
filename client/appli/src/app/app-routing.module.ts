import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './users/user-list/user-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';


const routes : Routes = [
    { path : 'users', component : UserListComponent },
    { path: 'auth', component: AuthentificationComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule { }
