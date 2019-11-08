import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCakeComponent } from './selected-cake.component';

describe('SelectedCakeComponent', () => {
  let component: SelectedCakeComponent;
  let fixture: ComponentFixture<SelectedCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
