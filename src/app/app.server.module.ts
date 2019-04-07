import { NgtPwaMockModule } from '@ng-toolkit/pwa';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    bootstrap: [AppComponent],

    imports: [
        NgtPwaMockModule,
        NoopAnimationsModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule,
        AppModule,
        ServerModule,
        BrowserModule.withServerTransition({ appId: 'app-root' })
    ]
})
export class AppServerModule { }


// NgtPwaMockModule,
// BrowserModule.withServerTransition({ appId: 'app-root' }),
// AppModule,
// ServerModule,
// NoopAnimationsModule,
// ModuleMapLoaderModule,
// ServerTransferStateModule // comment


// imports: [
//     NgtPwaMockModule,
//     ServerModule,
//     NoopAnimationsModule,
//     ModuleMapLoaderModule,
//     ServerTransferStateModule,
//     AppModule,
//     BrowserModule.withServerTransition({ appId: 'app-root' })
// ]
