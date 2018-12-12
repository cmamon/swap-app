import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes : Routes = [
    { path: '', loadChildren: './public/public.module#PublicModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule { }
