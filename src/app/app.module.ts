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
// modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// services
import { HttpService } from './services/http.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { IsAuthenticatedService } from './services/isAuthenticated.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { UsersService } from './services/users.service';

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
    // modules
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    IsAuthenticatedService,
    AuthService,
    AuthGuard,
    UsersService
  ],
})
export class AppModule { }
