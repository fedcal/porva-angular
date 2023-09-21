import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleProvaComponent } from './ng-style-prova.component';

describe('NgStyleProvaComponent', () => {
  let component: NgStyleProvaComponent;
  let fixture: ComponentFixture<NgStyleProvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgStyleProvaComponent]
    });
    fixture = TestBed.createComponent(NgStyleProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
