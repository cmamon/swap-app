import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AdminModule,
        PublicModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})

export class AppModule { }
