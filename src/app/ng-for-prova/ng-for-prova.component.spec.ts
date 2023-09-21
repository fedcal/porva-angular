import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForProvaComponent } from './ng-for-prova.component';

describe('NgForProvaComponent', () => {
  let component: NgForProvaComponent;
  let fixture: ComponentFixture<NgForProvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgForProvaComponent]
    });
    fixture = TestBed.createComponent(NgForProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
