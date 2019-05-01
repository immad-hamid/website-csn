import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-with-content-banner',
  templateUrl: './bg-with-content-banner.component.html',
  styleUrls: ['./bg-with-content-banner.component.scss']
})
export class BgWithContentBannerComponent {
  @Input() program;
}
