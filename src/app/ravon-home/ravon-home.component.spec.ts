import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavonHomeComponent } from './ravon-home.component';

describe('RavonHomeComponent', () => {
  let component: RavonHomeComponent;
  let fixture: ComponentFixture<RavonHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavonHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
