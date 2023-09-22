import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassParentChildComponent } from './class-parent-child.component';

describe('ClassParentChildComponent', () => {
  let component: ClassParentChildComponent;
  let fixture: ComponentFixture<ClassParentChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassParentChildComponent]
    });
    fixture = TestBed.createComponent(ClassParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
