import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetBuilderComponent } from './bet-builder.component';

describe('BetBuilderComponent', () => {
  let component: BetBuilderComponent;
  let fixture: ComponentFixture<BetBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
