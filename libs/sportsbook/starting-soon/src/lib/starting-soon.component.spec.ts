import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingSoonComponent } from './starting-soon.component';

describe('StartingSoonComponent', () => {
  let component: StartingSoonComponent;
  let fixture: ComponentFixture<StartingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
