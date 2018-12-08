import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './users/user-list/user-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes : Routes = [
    { path : 'users', component : UserListComponent },
    { path: 'auth', component: AuthenticationComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule { }
