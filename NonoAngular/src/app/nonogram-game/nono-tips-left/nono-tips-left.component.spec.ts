import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonoTipsLeftComponent } from './nono-tips-left.component';

describe('NonoTipsLeftComponent', () => {
  let component: NonoTipsLeftComponent;
  let fixture: ComponentFixture<NonoTipsLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonoTipsLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonoTipsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
