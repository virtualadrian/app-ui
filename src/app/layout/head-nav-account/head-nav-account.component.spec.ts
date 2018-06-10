import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNavAccountComponent } from './head-nav-account.component';

describe('HeadNavAccountComponent', () => {
  let component: HeadNavAccountComponent;
  let fixture: ComponentFixture<HeadNavAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadNavAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadNavAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
