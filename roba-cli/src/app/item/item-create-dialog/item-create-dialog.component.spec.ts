import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreateDialogComponent } from './item-create-dialog.component';

describe('ItemCreateDialogComponent', () => {
  let component: ItemCreateDialogComponent;
  let fixture: ComponentFixture<ItemCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
