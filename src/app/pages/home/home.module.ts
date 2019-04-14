import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { RecentBlogPostsComponent } from './recent-blog-posts/recent-blog-posts.component';
import { InfoContentAreaComponent } from './info-content-area/info-content-area.component';
import { RecentEventsComponent } from './recent-events/recent-events.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';

import { CardsModule } from './../../shared/components/cards/cards.module';
import { SectionHeaderModule } from './../../shared/components/section-header/section-header.module';
import { StripModule } from './../../shared/components/strip/strip.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LoadersModule } from 'src/app/shared/components/loaders/loaders.module';
import { SafeModule } from 'src/app/shared/pipe/safe/safe.module';
import { NguCarouselModule } from '@ngu/carousel';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    RecentBlogPostsComponent,
    InfoContentAreaComponent,
    RecentEventsComponent,
    WhatsNewComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    StripModule,
    SectionHeaderModule,
    MatSnackBarModule,
    MatCarouselModule,
    LoadersModule,
    SafeModule,
    NguCarouselModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
