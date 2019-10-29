import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShapeComponent } from './select-shape.component';

describe('SelectShapeComponent', () => {
  let component: SelectShapeComponent;
  let fixture: ComponentFixture<SelectShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
