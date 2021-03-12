import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MintyGanttComponent } from './minty-gantt.component';

describe('MintyGanttComponent', () => {
  let component: MintyGanttComponent;
  let fixture: ComponentFixture<MintyGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MintyGanttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MintyGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
