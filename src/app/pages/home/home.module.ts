import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { RecentBlogPostsComponent } from './recent-blog-posts/recent-blog-posts.component';
import { InfoContentAreaComponent } from './info-content-area/info-content-area.component';
import { StripModule } from 'src/app/shared/components/strip/strip.module';
import { RecentEventsComponent } from './recent-events/recent-events.component';
import { SectionHeaderModule } from 'src/app/shared/components/section-header/section-header.module';
import { WhatsNewComponent } from './whats-new/whats-new.component';


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
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
