import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UserListComponent } from '../users/user-list/user-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'users', component: UserListComponent },
        ], 
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})

export class AdminRoutingModule { }
