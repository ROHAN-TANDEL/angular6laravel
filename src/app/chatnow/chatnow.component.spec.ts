import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatnowComponent } from './chatnow.component';

describe('ChatnowComponent', () => {
  let component: ChatnowComponent;
  let fixture: ComponentFixture<ChatnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
