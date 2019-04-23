import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { AuthGuard } from './guard/auth.guard';
import { UserStatusGuard } from './guard/user-status.guard';

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
        loadChildren: './pages/home/home.module#HomeModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'about-us',
        loadChildren: './pages/about-us/about-us.module#AboutUsModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'our-team',
        loadChildren: './pages/team/team.module#TeamModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'welfare-and-support',
        loadChildren: './pages/welfare-and-support/welfare-and-support.module#WelfareAndSupportModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'our-mission-statement',
        loadChildren: './pages/our-mission/our-mission.module#OurMissionModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'our-history',
        loadChildren: './pages/our-history/our-history.module#OurHistoryModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'ghm',
        loadChildren: './pages/ghm/ghm.module#GhmModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'youth-development',
        loadChildren: './pages/youth-development/youth-development.module#YouthDevelopmentModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'icsn-programmes',
        loadChildren: './pages/icsn-programmes/icsn-programmes.module#IcsnProgrammesModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'mentoring-program',
        loadChildren: './pages/mentoring-program/mentoring-program.module#MentoringProgramModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'events',
        loadChildren: './pages/events/events.module#EventsModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'events/:id',
        loadChildren: './pages/single-event/single-event.module#SingleEventModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'news-and-updates',
        loadChildren: './pages/news-and-updates/news-and-updates.module#NewsAndUpdatesModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'news-and-updates/:id',
        loadChildren: './pages/single-news-and-updates/single-news-and-updates.module#SingleNewsAndUpdatesModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'get-involved',
        loadChildren: './pages/get-involved/get-involved.module#GetInvolvedModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'contact-us',
        loadChildren: './pages/contact-us/contact-us.module#ContactUsModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'shop',
        loadChildren: './pages/shop/shop.module#ShopModule',
        canActivate: [UserStatusGuard]
      },
      {
        path: 'my-profile',
        loadChildren: './pages/my-profile/my-profile.module#MyProfileModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-profile',
        loadChildren: './pages/edit-profile/edit-profile.module#EditProfileModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'privacy-terms',
        loadChildren: './pages/privacy-and-terms/privacy-and-terms.module#PrivacyAndTermsModule',
        canActivate: [UserStatusGuard]
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
