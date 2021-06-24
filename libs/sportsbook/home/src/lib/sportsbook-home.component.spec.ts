import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsbookHomeComponent } from './sportsbook-home.component';

describe('SportsbookHomeComponent', () => {
  let component: SportsbookHomeComponent;
  let fixture: ComponentFixture<SportsbookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsbookHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsbookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
