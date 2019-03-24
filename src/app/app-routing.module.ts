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
        path: 'our-team',
        loadChildren: './pages/team/team.module#TeamModule'
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
        path: 'events/:id',
        loadChildren: './pages/single-event/single-event.module#SingleEventModule'
      },
      {
        path: 'news-and-updates',
        loadChildren: './pages/news-and-updates/news-and-updates.module#NewsAndUpdatesModule'
      },
      {
        path: 'news-and-updates/:id',
        loadChildren: './pages/single-news-and-updates/single-news-and-updates.module#SingleNewsAndUpdatesModule'
      },
      {
        path: 'get-involved',
        loadChildren: './pages/get-involved/get-involved.module#GetInvolvedModule'
      },
      {
        path: 'contact-us',
        loadChildren: './pages/contact-us/contact-us.module#ContactUsModule'
      },
      {
        path: 'shop',
        loadChildren: './pages/shop/shop.module#ShopModule'
      },
      {
        path: 'my-profile',
        loadChildren: './pages/my-profile/my-profile.module#MyProfileModule'
      },
      {
        path: 'edit-profile',
        loadChildren: './pages/edit-profile/edit-profile.module#EditProfileModule'
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
