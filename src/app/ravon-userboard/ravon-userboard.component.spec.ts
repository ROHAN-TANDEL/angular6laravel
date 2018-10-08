import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavonUserboardComponent } from './ravon-userboard.component';

describe('RavonUserboardComponent', () => {
  let component: RavonUserboardComponent;
  let fixture: ComponentFixture<RavonUserboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavonUserboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavonUserboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
