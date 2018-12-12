import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthenticationService } from './authentication.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ResearchModule } from './research/research.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AdminModule,
        AppRoutingModule,
        ResearchModule
    ],
    declarations: [
        AppComponent,
        RegistrationComponent,
        AuthenticationComponent,
        PageNotFoundComponent,
        HeaderComponent
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
