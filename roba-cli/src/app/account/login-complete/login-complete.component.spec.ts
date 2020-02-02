import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompleteComponent } from './login-complete.component';

describe('LoginCompleteComponent', () => {
  let component: LoginCompleteComponent;
  let fixture: ComponentFixture<LoginCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
