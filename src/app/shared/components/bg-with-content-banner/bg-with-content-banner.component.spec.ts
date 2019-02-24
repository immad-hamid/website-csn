import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgWithContentBannerComponent } from './bg-with-content-banner.component';

describe('BgWithContentBannerComponent', () => {
  let component: BgWithContentBannerComponent;
  let fixture: ComponentFixture<BgWithContentBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgWithContentBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgWithContentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
