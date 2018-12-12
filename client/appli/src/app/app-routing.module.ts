import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ResearchSectionComponent } from './research/research-section/research-section.component';

const appRoutes: Routes = [
    { path: '', component: ResearchSectionComponent  },
    { path: 'admin', component: AdminComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule { }
