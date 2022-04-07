import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaldetailComponent } from './goaldetail.component';

describe('GoaldetailComponent', () => {
  let component: GoaldetailComponent;
  let fixture: ComponentFixture<GoaldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoaldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
