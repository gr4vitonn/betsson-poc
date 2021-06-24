import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBoostComponent } from './price-boost.component';

describe('PriceBoostComponent', () => {
  let component: PriceBoostComponent;
  let fixture: ComponentFixture<PriceBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceBoostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
