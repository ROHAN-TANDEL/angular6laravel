import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavonTopboardComponent } from './ravon-topboard.component';

describe('RavonTopboardComponent', () => {
  let component: RavonTopboardComponent;
  let fixture: ComponentFixture<RavonTopboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavonTopboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavonTopboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
