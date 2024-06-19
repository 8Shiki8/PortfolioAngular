import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SharedModule } from './app/shared/shared.module';
import { TiendaModule } from './app/tienda/tienda.module';
import { HomeModule } from './app/home/home.module';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, HomeModule, TiendaModule, SharedModule),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
