import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonoGameComponent } from './nono-game.component';

describe('NonoGameComponent', () => {
  let component: NonoGameComponent;
  let fixture: ComponentFixture<NonoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
