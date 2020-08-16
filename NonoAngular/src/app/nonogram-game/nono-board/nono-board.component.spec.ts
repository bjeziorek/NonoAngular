import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonoBoardComponent } from './nono-board.component';

describe('NonoBoardComponent', () => {
  let component: NonoBoardComponent;
  let fixture: ComponentFixture<NonoBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonoBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
