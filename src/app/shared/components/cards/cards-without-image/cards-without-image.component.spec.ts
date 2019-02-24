import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWithoutImageComponent } from './cards-without-image.component';

describe('CardsWithoutImageComponent', () => {
  let component: CardsWithoutImageComponent;
  let fixture: ComponentFixture<CardsWithoutImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsWithoutImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWithoutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
