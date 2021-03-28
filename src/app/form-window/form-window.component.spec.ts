import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWindowComponent } from './form-window.component';

describe('FormWindowComponent', () => {
  let component: FormWindowComponent;
  let fixture: ComponentFixture<FormWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
