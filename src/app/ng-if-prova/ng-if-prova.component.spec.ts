import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfProvaComponent } from './ng-if-prova.component';

describe('NgIfProvaComponent', () => {
  let component: NgIfProvaComponent;
  let fixture: ComponentFixture<NgIfProvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfProvaComponent]
    });
    fixture = TestBed.createComponent(NgIfProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
