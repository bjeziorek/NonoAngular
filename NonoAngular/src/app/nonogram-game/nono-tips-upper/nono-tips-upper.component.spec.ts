import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonoTipsUpperComponent } from './nono-tips-upper.component';

describe('NonoTipsUpperComponent', () => {
  let component: NonoTipsUpperComponent;
  let fixture: ComponentFixture<NonoTipsUpperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonoTipsUpperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonoTipsUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
