import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: './public/public.module#PublicModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule { }
