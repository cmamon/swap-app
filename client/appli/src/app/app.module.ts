import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';

import { AuthenticationService } from './authentication/authentication.service';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AdminModule,
        PublicModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AuthenticationComponent,
        RegistrationComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ AuthenticationService ]
})

export class AppModule { }
