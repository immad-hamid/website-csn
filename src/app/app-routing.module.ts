import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'about-us',
        loadChildren: './pages/about-us/about-us.module#AboutUsModule'
      },
      {
        path: 'icsn-programmes',
        loadChildren: './pages/icsn-programmes/icsn-programmes.module#IcsnProgrammesModule'
      },
      {
        path: 'events',
        loadChildren: './pages/events/events.module#EventsModule'
      },
      {
        path: 'news-and-updates',
        loadChildren: './pages/news-and-updates/news-and-updates.module#NewsAndUpdatesModule'
      },
      {
        path: 'sponsorship',
        loadChildren: './pages/sponsorship/sponsorship.module#SponsorshipModule'
      },
      {
        path: 'contact-us',
        loadChildren: './pages/contact-us/contact-us.module#ContactUsModule'
      },
      {
        path: 'my-profile',
        loadChildren: './pages/my-profile/my-profile.module#MyProfileModule'
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
