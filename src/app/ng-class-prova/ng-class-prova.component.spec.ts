import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassProvaComponent } from './ng-class-prova.component';

describe('NgClassProvaComponent', () => {
  let component: NgClassProvaComponent;
  let fixture: ComponentFixture<NgClassProvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgClassProvaComponent]
    });
    fixture = TestBed.createComponent(NgClassProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
