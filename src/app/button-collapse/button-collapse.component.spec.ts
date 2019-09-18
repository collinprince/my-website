import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCollapseComponent } from './button-collapse.component';

describe('ButtonCollapseComponent', () => {
  let component: ButtonCollapseComponent;
  let fixture: ComponentFixture<ButtonCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
