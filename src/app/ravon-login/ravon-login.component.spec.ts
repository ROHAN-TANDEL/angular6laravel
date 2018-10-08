import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavonLoginComponent } from './ravon-login.component';

describe('RavonLoginComponent', () => {
  let component: RavonLoginComponent;
  let fixture: ComponentFixture<RavonLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavonLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
