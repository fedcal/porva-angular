import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchProvaComponent } from './ng-switch-prova.component';

describe('NgSwitchProvaComponent', () => {
  let component: NgSwitchProvaComponent;
  let fixture: ComponentFixture<NgSwitchProvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSwitchProvaComponent]
    });
    fixture = TestBed.createComponent(NgSwitchProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
