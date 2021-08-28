import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ofComponent } from './of.component';

describe('ofComponent', () => {
  let component: ofComponent;
  let fixture: ComponentFixture<ofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
