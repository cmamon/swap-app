import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { UserListComponent } from '../users/user-list/user-list.component';

const routes : Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'admin/auth', component: AuthenticationComponent },
    { path: 'admin/users', component: UserListComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class AdminRoutingModule { }
