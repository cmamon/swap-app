import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', loadChildren: './public/public.module#PublicModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    providers: [ AuthGuard ]
})

export class AppRoutingModule { }
