import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routing module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// layout module
import { LayoutModule } from './layouts/layout.module';
// common components module
import { ComponentsModule } from './components/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    // layouts
    LayoutModule,
    // common components
    ComponentsModule
  ],
  providers: [],
})
export class AppModule { }
