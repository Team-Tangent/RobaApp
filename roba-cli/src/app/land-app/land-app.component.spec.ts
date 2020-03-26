import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAppComponent } from './land-app.component';

describe('LandAppComponent', () => {
  let component: LandAppComponent;
  let fixture: ComponentFixture<LandAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
