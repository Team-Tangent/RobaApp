import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutCompleteComponent } from './logout-complete.component';

describe('LogoutCompleteComponent', () => {
  let component: LogoutCompleteComponent;
  let fixture: ComponentFixture<LogoutCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
